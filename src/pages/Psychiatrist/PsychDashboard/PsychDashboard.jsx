import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/auth/authContext";
import ArticleContext from "../../../context/article/articleContext";
import { connect } from "react-redux";
import { getAllPsychAppointment,getPsychTotalAppointment,getAppointedUsersProfile} from "../../../Redux/PsychAppointment/psych_appointment_action";
import { Liquid } from "@ant-design/charts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  linearGradient,
} from "recharts";
// import PsychPage from "../../../component/Page/PsychPage";
import Layout from "../../../component/Layout/Layout";
import AppointmentCardItems from "../../../component/psychiatrist/PsychDashboard/AppointmentCardItems";
import FigureItem from "../../../component/psychiatrist/PsychDashboard/FigureItem";
import styles from "./psychDashboard.module.css";
const PsychDashboard = (props) => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  const {getPsychTotalArticle,psychTotalArticle} = articleContext;
  const { loadPsychiatrist, user } = authContext;
  const { name } = user;
  const { getAllPsychAppointment, allPsychAppointment,getPsychTotalAppointment,psychTotalAppointment,getAppointedUsersProfile,appointedUsersProfile} = props;
  const [appointment, setAppointment] = useState([]);
  const [dayName,setDayName] = useState("")
  var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  useEffect(() => {
    var datee = new Date();
    var day = datee.getDay();
    setDayName(dayNames[day])
  },[])
  useEffect(() => {
    loadPsychiatrist();
  }, []);
  useEffect(() => {
    getPsychTotalArticle()
  },[])
  useEffect(() => {
    getPsychTotalAppointment()
  },[])
  useEffect(() => {
    var datee = new Date();
    var day = datee.getDay();
    getAppointedUsersProfile(dayNames[day]);
  },[])
  useEffect(() => {
    if (!allPsychAppointment) {
      getAllPsychAppointment();
    } else {
      setAppointment(allPsychAppointment);
    }
  }, [allPsychAppointment]);
  const Days = [
    {
      name: "monday",
      appts: null,
      shortHand: "Mon",
    },
    {
      name: "tuesday",
      appts: null,
      shortHand: "Tue",
    },
    {
      name: "wednesday",
      appts: null,
      shortHand: "Wed",
    },
    {
      name: "thursday",
      appts: null,
      shortHand: "Thur",
    },
    {
      name: "friday",
      appts: null,
      shortHand: "Fri",
    },
    {
      name: "saturday",
      appts: null,
      shortHand: "Satur",
    },
    {
      name: "sunday",
      appts: null,
      shortHand: "Sun",
    },
  ];
  if (appointment.monday !== undefined) {
    for (let i = 0; i < Days.length; i++) {
      // Days[i].appts =  Object.entries(appointment[Days][i].day).length;
      // console.log(Days[i].appts = Object.entries(appointment[Days][i].day).length);
      let name = Days[i].name;
      Days[i].appts = Object.entries(appointment[name]).length;
    }
  }
  console.log(Days);

  var config = {
    percent: 0.74,
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "done ".concat(percent * 100, "%");
        },
        style: {
          fontSize: 20,
          fill: "rgb(130, 130, 130)",
        },
      },
    },
    liquidStyle: function liquidStyle(_ref2) {
      var percent = _ref2.percent;
      return { fill: percent > 0.75 ? "#52C41A" : "#FAAD14" };
    },
    color: function color() {
      return "#5B8FF9";
    },
  };
  const figures = [
    {
      color: "#40A9FF",
      Icon: "fas fa-user-injured",
      name: "Patient",
      totalNum: "92",
      backgroundColor: "rgba(64, 169, 255,0.3)",
    },
    {
      color: "#3ade99",
      Icon: "fas fa-calendar",
      name: "Appointments",
      // totalNum: "102",
      totalNum: psychTotalAppointment,
      backgroundColor: "rgba(58, 222, 153, 0.3)",
    },
    {
      color: "#fd7e14",
      Icon: "far fa-newspaper",
      name: "Article",
      // totalNum: "61",
      totalNum:psychTotalArticle,
      backgroundColor: "rgb(253, 126, 20,0.3)",
    },
  ];
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.welcome}>
          <div className={styles.welcomeTxt}>
            <h2>
              {" "}
              <b>Welcome</b> {name}!
            </h2>
            <p>
              You have <b>7 patinets</b> remaining today!
            </p>
            <p className={styles.second}>
              make sure to check documentation before call.
            </p>
          </div>
          <div className={styles.docImg}>
            <img src={require("../../../assets/welcome.svg")} alt="" />
          </div>
        </div>
        <div className={styles.dashBoardContent}>
          <div id="apptCardId" className={styles.apptCard}>
            <h4>Today's Appointment ({dayName})</h4>
            {appointedUsersProfile === undefined || appointedUsersProfile === null ? ("NO APPOINTMENT TODAY"):(
              appointedUsersProfile.map((profile) => (
                <AppointmentCardItems
                // name="Emma watson"
                // avi={require("../../../assets/person8.jpg")}
                name = {profile.name}
                avi = {profile.avatar}
              />
              ))
            )}
            
            {/* <AppointmentCardItems
              name="David alison"
              avi={require("../../../assets/person2.jpg")}
            />
            <AppointmentCardItems
              name="belayneh"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="jon doe"
              avi={require("../../../assets/person5.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="ermias aklilu"
              avi={require("../../../assets/person6.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            /> */}
          </div>
          <div className={styles.numbers}>
            <div className={styles.dashboardFigures}>
              {figures.map((figure) => (
                <FigureItem
                  colors={figure.color}
                  Icon={figure.Icon}
                  name={figure.name}
                  totalNum={figure.totalNum}
                  backgroundColor={figure.backgroundColor}
                />
              ))}
            </div>
            <div className={styles.graphs}>
              <AreaChart
                className={styles.areaChart}
                width={400}
                height={200}
                data={Days}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6f3ad9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6f3ad9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="shortHand" />
                <YAxis type="number" allowDecimals="false" />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="appts"
                  stroke="#6f3ad9"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
              <Liquid
                className={styles.liquid}
                {...config}
                style={{
                  width: "120px",
                  height: "180px",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  allPsychAppointment: state.psychAppointment.allPsychAppointment,
  psychTotalAppointment:state.psychAppointment.psychTotalAppointment,
  appointedUsersProfile:state.psychAppointment.appointedUsersProfile
});

export default connect(mapStateToProps, {
  getAllPsychAppointment,
  getPsychTotalAppointment,
  getAppointedUsersProfile
})(PsychDashboard);
