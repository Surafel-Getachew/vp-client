import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { getTotalRooms } from "../../../Redux/GroupVideoChat/group-video-chat-action";
import { getTotalSchduleOfEachDay } from "../../../Redux/Schedule/schedule_action";
import {getTotalApptEachDay} from "../../../Redux/PsychAppointment/psych_appointment_action";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Layout from "../Layout/Layout";
import FigureItem from "./FigureItem";
import styles from "./dashboard.module.css";
import AuthContext from "../../../context/auth/authContext";
import ArticleContext from "../../../context/article/articleContext";
const Dashboard = (props) => {
  const {
    getTotalRooms,
    totalRooms,
    getTotalSchduleOfEachDay,
    totalScheduleOfDays,
    getTotalApptEachDay,
    totalApptEachDay
  } = props;
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  const { getTotalArticles, totalArticles } = articleContext;
  const {
    getTotalUsers,
    getTotalPsychiatrists,
    totalUsers,
    totalPsychiatrists,
  } = authContext;
  useEffect(() => {
    getTotalPsychiatrists();
  }, []);
  useEffect(() => {
    getTotalUsers();
  }, []);
  useEffect(() => {
    getTotalArticles();
  }, []);
  useEffect(() => {
    getTotalRooms();
  }, []);
  useEffect(() => {
    getTotalSchduleOfEachDay();
  }, []);
  useEffect(() => {
   getTotalApptEachDay();
  }, []);
  let datas;
  console.log(totalApptEachDay);
  if (totalScheduleOfDays !== null && totalApptEachDay !== null) {
     datas = [
      {
        name: "Monday",
        Appointment: totalApptEachDay.monday,
        Schedule: totalScheduleOfDays.monday,
        // amt: 2400,
      },
      {
        name: "Tuesday",
        Appointment: totalApptEachDay.tuesday,
        Schedule: totalScheduleOfDays.tuesday,
        // amt: 2210,
      },
      {
        name: "Wednesday",
        Appointment: totalApptEachDay.wednesday,
        Schedule: totalScheduleOfDays.wednesday,
        // amt: 2290,
      },
      {
        name: "Thursday",
        Appointment: totalApptEachDay.thursday,
        Schedule: totalScheduleOfDays.thursday,
        // amt: 2000,
      },
      {
        name: "Friday",
        Appointment: totalApptEachDay.friday,
        Schedule: totalScheduleOfDays.friday,
        // amt: 2181,
      },
      {
        name: "Saturday",
        Appointment: totalApptEachDay.saturday,
        Schedule: totalScheduleOfDays.saturday,
        // amt: 2500,
      },
      {
        name: "Sunday",
        Appointment: totalApptEachDay.sunday,
        Schedule: totalScheduleOfDays.sunday,
        // amt: 2100,
      },
    ];
  }

 
  const data = [
    {
      name: "Group A",
      value: 400,
      colors: "#04b6f2",
    },
    {
      name: "Group B",
      value: 300,
      colors: "#fd7e14",
    },
    {
      name: "Group C",
      value: 500,
      colors: "#40A9FF",
    },
    {
      name: "Group D",
      value: 200,
      colors: "#fd7e14",
    },
    {
      name: "Group E",
      value: 278,
      colors: "#40A9FF",
    },
    {
      name: "Group F",
      value: 189,
      colors: "#703bda",
    },
  ];
  const figures = [
    {
      color: "#3ade99",
      Icon: "fas fa-user-injured",
      name: "Users",
      // totalNum: "102",
      totalNum: totalUsers,
      backgroundColor: "rgba(58, 222, 153, 0.3)",
    },

    {
      color: "#40A9FF",
      Icon: "fas fa-user-md",
      name: "Psychiatrist",
      // totalNum: "92",
      totalNum: totalPsychiatrists,
      backgroundColor: "rgba(64, 169, 255,0.3)",
    },
    {
      color: "#fd7e14",
      Icon: "far fa-newspaper",
      name: "Article",
      totalNum: totalArticles,
      backgroundColor: "rgb(253, 126, 20,0.3)",
    },
    {
      color: "#04b6f2",
      Icon: "fas fa-users",
      name: "TherapyRooms",
      // totalNum: "92",
      totalNum: totalRooms,
      backgroundColor: "rgba(4, 182, 242,0.3)",
    },
  ];
  return (
    <Layout>
      <div>
        <div className={styles.numsCnt}>
          {figures.map((figure) => (
            <FigureItem figure={figure} />
          ))}
        </div>
        <div className={styles.areaChart}>
          <AreaChart
            width={890}
            // width = "85%"
            height={250}
            data={datas}
            margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
            // margin={{ top: 10,bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Appointment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Schedule"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div>
          <PieChart width={730} height={250}>
            <Pie
              name="Addiction"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                // <Cell key={`cell-${index}`} fill={colors[index]} />
                <Cell key={`cell-${index}`} fill={data[index].colors} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  totalRooms: state.groupVideoChat.totalRooms,
  totalScheduleOfDays: state.schedule.totalScheduleOfDays,
  totalApptEachDay:state.psychAppointment.totalApptEachDay
});
export default connect(mapStateToProps, {
  getTotalRooms,
  getTotalSchduleOfEachDay,
  getTotalApptEachDay
})(Dashboard);
