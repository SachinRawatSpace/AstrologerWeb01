import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/boy-img.png";
import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { FaArrowAltCircleRight } from "react-icons/fa";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooglebtn: false,
      userChatList: [],
      userId: "",
      astroId: "",
      userData: null,
      msg: "",
      roomId: "",
      roomChatData: [],
      time: {},
      seconds: 60 * 15,
      reciver: "",
      minutes: 15,
      ModdleToggle: false,
      indexValue: 0,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  handleKundaly = () => {
    console.log("kundali");
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleaddBal = async () => {
    let payload = {
      userId: this.state.userId,
      astroId: this.state.astroId,
      type: "Chat",
    };
    console.log(payload);
    await axiosConfig
      .post(`/user/deductChatBalance`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  handleCloseChat = (e) => {
    e.preventDefault();
    let astroid = localStorage.getItem("astroId");
    let userid = localStorage.getItem("CurrentChat_userid");
    let value = {
      userId: userid,
      astroId: astroid,
    };

    axiosConfig
      .post(`/user/changeStatus`, value)
      .then((res) => {
        console.log(res);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  componentDidMount() {
    let astroId = localStorage.getItem("astroId");

    if (JSON.parse(localStorage.getItem("minute"))) {
      let minute = JSON.parse(localStorage.getItem("minute"));
      this.setState({ minutes: minute, seconds: minute * 60 });
    }
    axiosConfig
      .get(`/user/astrogetRoomid/${astroId}`)
      .then((response) => {
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
            roomId: response?.data?.data?.roomid,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds =
      this.state.seconds !== 0 ? this.state.seconds - 1 : alert("out time");

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  getChatdata = () => {
    setInterval(() => {
      this.getChatRoomIdnew(this.state.userData, this.state.indexValue);
    }, 5000);
  };

  getChatRoomIdnew = (user, i) => {
    this.setState({ userData: user });
    let userIds = [user?.userid?._id];
    this.setState({
      userId: user?.userid?._id,
      roomId: user?.roomid,
      indexValue: i,
      astroId: user?.astroid?._id,
    });
    axiosConfig
      .get(`/user/allchatwithAstro/${user?.astroid?._id}`)
      .then((response) => {
        if (response.data.status === true) {
          let filteredArray = response?.data?.data.filter(function (item) {
            return (
              userIds.indexOf(item?.userid?._id || item?.reciver?._id) > -1
            );
          });

          this.setState({ roomChatData: filteredArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getChatRoomId = async (user, i) => {
    this.setState({ userData: user });
    this.setState({ ModdleToggle: true });
    let userIds = [user?.userid?._id];
    this.setState({
      userId: user?.userid?._id,
      roomId: user?.roomid,
      indexValue: i,
      astroId: user?.astroid?._id,
    });
    await axiosConfig
      .get(`/user/allchatwithAstro/${user?.astroid?._id}`)
      .then((response) => {
        if (response.data.status === true) {
          let filteredArray = response?.data?.data.filter(function (item) {
            return (
              userIds.indexOf(item?.userid?._id || item?.reciver?._id) > -1
            );
          });
          this.setState({ roomChatData: filteredArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    // debugger;

    console.log(this.state.msg.length);
    if (this.state.msg !== "" || this.state.msg.length === 0) {
      let obj = {
        reciver: this.state.userId,
        msg: this.state.msg,
      };
      let userIds = [this.state.userId];
      await axiosConfig
        .post(`/user/add_chatroom/${this.state.astroId}`, obj)
        .then(async (response) => {
          if (response.data.status === true) {
            this.setState({ msg: "" });
            await axiosConfig
              .get(`/user/allchatwithAstro/${this.state.astroId}`)
              .then((response1) => {
                if (response1.data.status === true) {
                  let filteredArray = response1?.data?.data.filter(function (
                    item
                  ) {
                    return (
                      userIds.indexOf(item?.userid?._id || item?.reciver?._id) >
                      -1
                    );
                  });
                  this.setState({ roomChatData: filteredArray });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ tooglebtn: true });
    }
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
    this.setState({ tooglebtn: e.target.value.trim() !== "" });
  };

  toggleShowOldChats = () => {
    // Toggle the state variable showOldChats
    this.setState((prevState) => ({
      showOldChats: !prevState.showOldChats,
    }));
  };

  render() {
    const { indexValue, showOldChats } = this.state;
    const modalBackgroundClass = this.state.isModalOpen
      ? "modal-background open"
      : "modal-background";

    return (
      <div>
        <section className="">
          <Container>
            <Row>
              {this.state.ModdleToggle === false ? (
                <>
                  <Col lg="4">
                    <div class="mymessagehead">
                      <div class="mymsgsubhead">
                        <h1 class="title mx-1 mb-2">My messages</h1>
                        <ChatAppList
                          userChatList={
                            this.state.userChatList.length
                              ? this.state.userChatList
                              : []
                          }
                          getChatRoomId={(user, i) =>
                            this.getChatRoomId(user, i)
                          }
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg="8">
                    <div class="app rt-chat">
                      <div class="messages">
                        <div className="chat-header">
                          <div className="d-flex justify-content-between">
                            <div>
                              <span>
                                <img
                                  src={
                                    this.state.roomChatData.length > 0
                                      ? this.state.userChatList[indexValue]
                                          ?.userid?.userimg[0]
                                      : Buyimg
                                  }
                                  className="app-img"
                                  alt=""
                                />
                              </span>
                              <div>
                                {/* Toggle button to control showing old chats */}
                                <label>
                                  Show old chats
                                  <input
                                    type="checkbox"
                                    checked={showOldChats}
                                    onChange={this.toggleShowOldChats}
                                  />
                                </label>
                              </div>
                              {/* Render old chats only if showOldChats is true */}
                              {showOldChats && (
                                <ChatAppMassage
                                  roomChatData={
                                    this.state.roomChatData.length > 0
                                      ? this.state.roomChatData
                                      : []
                                  }
                                />
                              )}
                              <span>
                                {this.state.roomChatData.length > 0
                                  ? this.state.userChatList[indexValue]?.userid
                                      ?.fullname
                                  : null}
                              </span>
                            </div>

                            <div>
                              <Button
                                className="mb-1"
                                onClick={(e) => this.handleKundaly(e)}
                                color="primary"
                              >
                                View Kundaly
                              </Button>

                              {/* kindali hardcoded data  */}
                              {this.state.isModalOpen && (
                                <div
                                  className={modalBackgroundClass}
                                  onClick={this.closeModal}
                                >
                                  {/* <div className="modal-content"> */}
                                  <div class="main">
                                    <div class="sub"></div>
                                    <div class="line1"></div>
                                    <div class="line2"></div>
                                    <p class="p1">
                                      AA
                                      <br />
                                      &nbsp;01
                                    </p>
                                    <p class="p2">
                                      AA
                                      <br />
                                      &nbsp;02
                                    </p>
                                    <p class="p3">
                                      AA
                                      <br />
                                      &nbsp;03
                                    </p>
                                    <p class="p4">
                                      AA
                                      <br />
                                      &nbsp;04
                                    </p>
                                    <p class="p5">
                                      AA
                                      <br />
                                      &nbsp;05
                                    </p>
                                    <p class="p6">
                                      AA
                                      <br />
                                      &nbsp;06
                                    </p>
                                    <p class="p7">
                                      AA
                                      <br />
                                      &nbsp;07
                                    </p>
                                    <p class="p8">
                                      AA
                                      <br />
                                      &nbsp;08
                                    </p>
                                    <p class="p9">
                                      AA
                                      <br />
                                      &nbsp;09
                                    </p>
                                    <p class="p10">
                                      AA
                                      <br />
                                      &nbsp;10
                                    </p>
                                    <p class="p11">
                                      AA
                                      <br />
                                      &nbsp;11
                                    </p>
                                    <p class="p12">
                                      AA
                                      <br />
                                      &nbsp;12
                                    </p>
                                  </div>
                                </div>
                                // </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="messages-history">
                          <ChatAppMassage
                            roomChatData={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData
                                : []
                            }
                          />
                        </div>

                        <form class="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                          />
                          <button
                            // onClick={(e) => swal("Select User to full screen")}
                            onClick={this.submitHandler}
                          >
                            {/* Send */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg={this.state.ModdleToggle === true ? "12" : "8"}>
                    <Row>
                      <Col>
                        <FaArrowAltCircleRight
                          style={{ cursor: "pointer" }}
                          onClick={() => this.setState({ ModdleToggle: false })}
                          fill="#ffcc01"
                          size="40px"
                          className="mx-2 mb-2 faarrowalt"
                        />
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-end mt-1">
                          <Button
                            className="closebtnchat"
                            onClick={(e) => this.handleCloseChat(e)}
                            color="primary"
                          >
                            Close Chat
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div class="app rt-chat">
                      <div class="messages">
                        <div className="chat-header">
                          <div className="mainDiv d-flex justify-content-between">
                            <div>
                              <span>
                                <img
                                  src={
                                    this.state.roomChatData.length > 0
                                      ? this.state.userChatList[indexValue]
                                          ?.userid?.userimg[0]
                                      : Buyimg
                                  }
                                  className="app-img"
                                  alt=""
                                />
                              </span>
                              <span>
                                {this.state.roomChatData.length > 0
                                  ? this.state.userChatList[indexValue]?.userid
                                      ?.fullname
                                  : null}
                              </span>
                            </div>
                            <div>
                              <Button
                                className="mb-1 viewkundaly"
                                onClick={(e) => this.handleKundaly(e)}
                                color="primary"
                                size="sm"
                              >
                                View Kundaly
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div class="messages-history">
                          <ChatAppMassage
                            roomChatData={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData
                                : []
                            }
                          />
                        </div>
                        <form class="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                            defaultValue=""
                          />
                          <button
                            onClick={(e) =>
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId
                              )
                            }
                            // disabled=true
                            disabled={!this.state.tooglebtn}
                          >
                            <i class="material-icons">Send</i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default ChatApp;