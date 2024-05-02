/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../../assets/scss/pages/users.scss";
import {
  UncontrolledDropdown,
  Badge,
  Media,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell } from "react-feather";
import "moment-timezone";
import moment from "moment";
import swal from "sweetalert";


const handleNavigation = (e, path) => {
  e.preventDefault();
  window.location.replace(path);
};

const NavbarUser = () => {
  const [profilepic, setProfilepic] = useState([]);
  const [astronotification, setAstronotification] = useState([]);
  const [newStatus, setNewStatus] = useState("");
  const [viewnotify, setViewnotify] = useState("");
  const [VideoCount, setVideoCount] = useState("");
  const [videonotify, setVideonotify] = useState([]);
  const [ButtonText, setButtonText] = useState("offline");
  const history = useHistory();

  const handleofflineAstro = (e, path) => {
    e.preventDefault();
    debugger;
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("ad-token"))}`,
      },
    };
    axiosConfig
      .get(`/user/logout`, config)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        swal("Logout Successfully");
        window.location.replace(path);
      })
      .catch((err) => {
        swal("Logout Api not Working ");
      });
  };

  const getAllnotification = async () => {
    const astroId = localStorage.getItem("astroId");

    await axiosConfig
      .get(`/user/wait_queue_list/${astroId}`)
      .then((res) => {
        setAstronotification(res.data.data);
        setViewnotify(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };
  const newgetAllnotification = async () => {
    const astroId = localStorage.getItem("astroId");
    await axiosConfig
      .get(`/user/VdolinkList/${astroId}`)
      .then((res) => {
        setVideonotify(res.data.data);
        setVideoCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  useEffect(() => {
    setInterval(() => {
      newgetAllnotification();
      getAllnotification();
    }, 4000);
  }, [VideoCount]);
  useEffect(() => {
    async function getOneUser() {
      try {
        const astroId = localStorage.getItem("astroId");
        const response = await axiosConfig.get(`/admin/getoneAstro/${astroId}`);
        setProfilepic(response.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getOneUser();
  }, []);

  const handleshowofflineAstro = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
  

    // Determine the appropriate title and button text based on the current status
    const title =
    ButtonText === "Online" ? "Go Online?": "Are you sure to Go Offline";
    const confirmButtonText =
    ButtonText === "offline" ? "Online" : "Offline";

    swalWithBootstrapButtons
      .fire({
        title: title,
        // text: "You won't be able to revert this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // User confirmed, proceed with status change
          axiosConfig
            .post(`/user/status_change/${astroid}`, {
              status: ButtonText === "Offline"  ? "Online": "Offline",
            })
            .then((res) => {
              console.log(res.data);
              swal("Status changed Successfully");
              if (res.data.message === "success") {
                // Toggle the ButtonText based on the current status
                setButtonText(ButtonText === "Offline"  ? "Online": "Offline" );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // User denied or cancelled, do nothing
          swalWithBootstrapButtons.fire(
            "Proceed Cancel",
            "Cancelled",
            "error"
          );
        }
      });
  };

  const handleshowChangeMode = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    axiosConfig
      .post(`/user/status_change/${astroid}`, {
        callingStatus: newStatus,
      })
      .then((res) => {
        console.log("statusChange", res.data.data);
        swal("Status changed Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStatus = (data) => {
    console.log(data);
    localStorage.setItem("notification_Accepted_id", data?._id);
    localStorage.setItem("CurrentChat_userid", data?.userid?._id);
    let accept = {
      status: "Accept",
    };
    axiosConfig
      .post(`/user/acceptNotificationByAstro/${data?._id}`, accept)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (data?.type === "Chat") {
      history.push({ pathname: "/app/astrochat/chatastro", state: data });
    }
    if (data?.type === "Video" && data.videoLink) {
      window.open(`#/app/call/VideoCall/${data?.videoLink}`, data.videoLink);
    } else {
      swal("Wait For confirmation with second notify");
    }
  };
  const handleVideoStatus = (data) => {
    console.log("XCV", data);
    localStorage.setItem("notification_Accepted_id", data?._id);
    localStorage.setItem("CurrentVideo_userid", data?.userid?._id);
    let accept = {
      status: "Accept",
    };
    axiosConfig
      .post(`/user/acceptVideoNotificationByAstro/${data?._id}`, accept)
      .then((res) => {
        console.log("for Type", res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
    window.open(`#/app/call/VideoCall/${data?.videoLink}`, data.videoLink);
  };
  const handledelStatus = (data) => {
    axiosConfig
      .get(`/admin/dltNotificattion/${data?._id}`)
      .then((res) => {
        console.log(res);
        getAllnotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleVideoDeleteNotify = (data) => {
    axiosConfig
      .get(`/user/VdolinkList/${data?._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <ul className="nav navbar-nav navbar-nav-user float-right">
        {/* <li>
          <select
            className="mt-1"
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="Available">--Select--</option>
            <option value="Wait">Wait</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
          </select>
          <Button
            onClick={handleshowChangeMode}
            size="sm"
            className="ml-1  btn btn-success "
          >
            Mark {newStatus && newStatus}
          </Button>
        </li> */}
          <li>
       <select 
      //  onChange={(e) => LanguageSwitcher(e.target.value)}
      name="language"
      id=""
      className="mt-1 stylish-select"
      style={{
        padding: "0.5rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        color: "#333",
        fontSize: "0.7rem",
        fontFamily: "Arial, sans-serif",
        width: "80px", // You can adjust the width as needed
        height: "28px",
        position: "relative",
        right: "15%"
      }}
    >
      <option value="en">Language</option>
      <option value="hi">हिंदी</option>
      <option value="en">English</option>
    </select>
        </li>
        <li>
        <Button
            onClick={handleshowofflineAstro}
            size="sm"
            className="ml-1 mt-1 btn btn-success "
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
              fontSize: "0.7rem",
              fontFamily: "Arial, sans-serif",
              width: "80px", // You can adjust the width as needed
              height: "28px",
            }}
          >
            Mark {ButtonText && ButtonText}
          </Button>
        </li>

        <UncontrolledDropdown
          className="dropdown-notification nav-item"
          tag="li"
        >
          <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            className="nav-link nav-link-label"
          >
            <Bell size={21} />

            <Badge pill color="primary" className="badge-up">
              {viewnotify + VideoCount}
            </Badge>
          </DropdownToggle>

          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">{viewnotify + VideoCount}</h3>
                <span className="notification-title"> Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false,
              }}
            >
              <div className="">
                {astronotification.map((data, i) => (
                  <Media key={i} className="dddddfd">
                    <Media left href="#">
                      <Bell size={21} />
                    </Media>
                    <Media body>
                      <Media heading className="success media-heading" tag="h6">
                        <small className="notification-text ml-1">
                          <img
                            className="mr-2"
                            style={{ borderRadius: "8px" }}
                            src={data?.userid?.userimg}
                            width="22px"
                            height="22px"
                          />
                          <span>{data?.userid?.fullname}</span>
                        </small>
                      </Media>
                      <small className="notification-text">
                        <p className="mb-0">
                          Request for:
                          <span>{data.type ? data.type : "Voice Call"}</span>
                        </p>
                      </small>
                      <div className="bottom-tag">
                        <Button
                          onClick={() => handleStatus(data)}
                          className="success media-heading gt-1"
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleVideoDeleteNotify(data)}
                          className="denger media-heading gt-2"
                        >
                          Reject
                        </Button>
                      </div>
                    </Media>
                    <small>
                      <time
                        className="media-meta"
                        dateTime="2015-06-11T18:29:20+08:00"
                      >
                        {moment(data.createdAt).format("ll")}
                      </time>
                    </small>
                  </Media>
                ))}
                {videonotify.map((data, i) => (
                  <Media key={i} className="dddddfd">
                    <Media left href="#">
                      <Bell size={21} />
                    </Media>
                    <Media body>
                      <Media heading className="success media-heading" tag="h6">
                        <small className="notification-text ml-1">
                          <img
                            className="mr-2"
                            style={{ borderRadius: "8px" }}
                            src={data?.userid?.userimg}
                            width="22px"
                            height="22px"
                          />

                          <span>{data?.userid?.fullname}</span>
                        </small>
                      </Media>
                      <small className="notification-text">
                        <p className="mb-0">
                          Request for: <span>{data.type} Call</span>
                        </p>
                      </small>
                      <div className="bottom-tag">
                        <Button
                          onClick={() => handleVideoStatus(data)}
                          className="success media-heading gt-1"
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => handledelStatus(data)}
                          className="denger media-heading gt-2"
                        >
                          Reject
                        </Button>
                      </div>
                    </Media>
                    <small>
                      <time
                        className="media-meta"
                        dateTime="2015-06-11T18:29:20+08:00"
                      >
                        {moment(data.createdAt).format("ll")}
                      </time>
                    </small>
                  </Media>
                ))}
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                Read all notifications
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* astrologer api call */}
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              {profilepic?.fullname}
            </div>
            <span data-tour="user">
              <img
                src={profilepic?.img}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>

          <DropdownMenu right>
            <DropdownItem
              tag="a"
              href="#"
              onClick={(e) => handleNavigation(e, "/#/pages/profile")}
            >
              <Icon.User size={14} className="mr-50" />
              <span className="align-middle">Edit Profile</span>
            </DropdownItem>

            <DropdownItem divider />
            <Route
              render={({ history }) => (
                <DropdownItem
                  tag="a"
                  onClick={(e) => handleofflineAstro(e, "/#/pages/login")}
                >
                  <Icon.Power size={14} className="mr-50" />
                  <span className="align-middle">LogOut</span>
                </DropdownItem>
              )}
            />
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    </div>
  );
};
export default NavbarUser;
