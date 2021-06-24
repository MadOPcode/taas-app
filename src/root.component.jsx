import React from "react";
import { Provider } from "react-redux";
import { Router, Redirect } from "@reach/router";
import MyTeamsList from "./routes/MyTeamsList";
import MyTeamsDetails from "./routes/MyTeamsDetails";
import PositionDetails from "./routes/PositionDetails";
import ResourceBookingDetails from "./routes/ResourceBookingDetails";
import ResourceBookingForm from "./routes/ResourceBookingForm";
import JobDetails from "./routes/JobDetails";
import JobForm from "./routes/JobForm";
import TeamAccess from "./routes/TeamAccess";
import CreateNewTeam from "./routes/CreateNewTeam";
import InputSkills from "./routes/CreateNewTeam/pages/InputSkills";
import InputJobDescription from "./routes/CreateNewTeam/pages/InputJobDescription";
import SelectRole from "./routes/CreateNewTeam/pages/SelectRole";
import ReduxToastr from "react-redux-toastr";
import store from "./store";
import "./styles/main.vendor.scss";
import styles from "./styles/main.module.scss";

export default function Root() {
  return (
    <div className={styles["topcoder-micro-frontends-teams-app"]}>
      <Provider store={store}>
        <Router>
          <Redirect from="/taas" to="/taas/myteams" exact />
          <MyTeamsList path="/taas/myteams" />
          <CreateNewTeam path="/taas/createnewteam" />
          <MyTeamsDetails path="/taas/myteams/:teamId" />
          <JobDetails path="/taas/myteams/:teamId/positions/:jobId" />
          <JobForm path="/taas/myteams/:teamId/positions/:jobId/edit" />
          <JobForm path="/taas/myteams/:teamId/positions/new" />
          <ResourceBookingDetails path="/taas/myteams/:teamId/rb/:resourceBookingId" />
          <ResourceBookingForm path="/taas/myteams/:teamId/rb/:resourceBookingId/edit" />
          <PositionDetails path="/taas/myteams/:teamId/positions/:positionId/candidates" />
          <TeamAccess path="/taas/myteams/:teamId/access" />
          <InputJobDescription path="/taas/createnewteam/jd/*" />
          <InputSkills path="/taas/createnewteam/skills/*" />
          <SelectRole path="/taas/createnewteam/role/*" />
        </Router>

        {/* Global config for Toastr popups */}
        <ReduxToastr
          timeOut={4000}
          position="bottom-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </Provider>
    </div>
  );
}
