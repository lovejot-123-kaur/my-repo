import React from "react";
import Button from "./button.jsx";
import "./Mindmotion.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { RiPlayListLine } from "react-icons/ri";
import { MdOutlineAudioFile } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
const MindMotion = () => {
  return (
    <div className="abc">
      <div className="container">
        <div className="sidebar">
           <div className="mindmotion"><h2> Mind Motion</h2></div>
          <div className="btndiv">
          <button className="menu-btn active">
            {" "}
          <div><MdOutlineDashboardCustomize />  Dashboard  </div> 
          </button>
          <button className="menu-btn">
            {" "}
            <FiUsers /> User Management
          </button>
          <button className="menu-btn">
            {" "}
            <RiPlayListLine /> Playlist Management
          </button>
          <button className="menu-btn">
            {" "}
            <MdOutlineAudioFile /> Audio Management
          </button>
          <button className="menu-btn">
            {" "}
            <BiSupport /> Support Tickets
          </button></div>
        </div>

        <div className="main-content">
          <div className="header">
            <div>
              <h2>User Management</h2>
              <p>
                Manage registered users, view activity, and update account
                status
              </p>
            </div>
            <div className="admin">
              <h4><RiAdminLine />Admin</h4>
              <p>admin123@gmail.com</p>
            </div>
          </div>
          <div className="actions">

            <input
              type="text" 
              placeholder=" Search by name, email, plan..."
              className="search-box"
            />
            <button className="add-user-btn">+ Add User</button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Preferences</th>
                  <th>Action</th>
                </tr> 
              </thead>
              <tbody>
                <tr>
                  <td> <FaUserCircle /> Lorem Ipsum</td>
                  <td>lorem.ipsum@example.com</td>
                  <td>
                    <button className="freum1">Freemium</button></td>
                  <td>Deep Sleep, Zen Forest, White Noise</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td> <FaUserCircle /> Dolor Sit</td>
                  <td>dolor.sit@domain.com</td>
                  <td>
                    <button className="freum1">Freemium</button></td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                   <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Amet Consectetur</td>
                  <td>amet.c@service.net</td>
                  <td><button className="freum1">Freemium</button>
                  </td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Adipiscing Elit</td>
                  <td>elit.adipiscing@mail.org</td>
                  <td><button className="freum1">Freemium</button></td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Sed Do</td>
                  <td>sed.do@website.io</td>
                  <td><button className="freum1">Freemium</button></td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Eiusmod Tempor</td>
                  <td>eiusmod.t@provider.net</td>
                  <td><button className="freum1">Freemium</button></td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Incididunt Labore</td>
                  <td>incididunt.l@samplemail.com</td>
                  <td><button className="freum2">Freemium</button></td>
                  <td>Focus Mode, Binaural Beats, Rain Sounds</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Ut Enim</td>
                  <td>ut.enim@fakemail.co</td>
                  <td><button className="freum2">Freemium</button></td>
                  <td>Calm Breathing, Sleep Stories</td>
                  <td>
                   <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Minim Veniam</td>
                  <td>minim.v@placeholder.dev</td>
                  <td><button className="freum2">Freemium</button></td>
                  <td>Calm Breathing, Sleep Stories</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Quis Nostrud</td>
                  <td>quis.nostrud@demo.org</td>
                  <td><button className="freum2">Freemium</button></td>
                  <td>Calm Breathing, Sleep Stories</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
                <tr>
                  <td><FaUserCircle /> Eiusmod Ipsum</td>
                  <td>eiusm1od.t@provider.net</td>
                  <td><button className="freum2">Freemium</button></td>
                  <td>Calm Breathing, Sleep Stories</td>
                  <td>
                    <Button/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMotion;
