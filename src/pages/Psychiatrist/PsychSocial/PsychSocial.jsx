import React, { useState } from "react";
import { connect } from "react-redux";
// import PsychPage from "../../../component/Page/PsychPage";
import Layout from "../../../component/Layout/Layout";
import styels from "./psychSoc.module.css";
import { addPsychSocial } from "../../../Redux/PsychSocial/psych_social_action";

const PsychSocial = ({ addPsychSocial }) => {
  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const { facebook, twitter, linkedin, youtube, instagram } = social;
  const onChange = (e) => {
    setSocial({ ...social, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPsychSocial(social);
  };

  return (
    <Layout>
      <div className={styels.socialForm}>
        <div className={styels.socialFormCenter}>
          <form onSubmit={onSubmit}>
            <div className={styels.socialInput}>
              <label htmlFor="facebook">Facebook URL</label>
              <br />
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
              <br />
            </div>
            <div className={styels.socialInput}>
              <label htmlFor="twitter">Twitter URL</label>
              <br />
              <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
              <br />
            </div>
            <div className={styels.socialInput}>
              <label htmlFor="linkedin">Linkedin URL</label>
              <br />
              <input
                type="text"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
              <br />
            </div>
            <div className={styels.socialInput}>
              <label htmlFor="youtube">YouTube URL</label>
              <br />
              <input
                type="text"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
              <br />
            </div>
            <div className={styels.socialInput}>
              <label htmlFor="instagram">Instagram URL</label>
              <br />
              <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
              <br />
            </div>
            <br />
            <div>
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  psychSocial: state.psychSocial,
});

export default connect(mapStateToProps, { addPsychSocial })(PsychSocial);
