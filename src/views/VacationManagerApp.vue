<template>
  <div class="page">
    <div class="container">
      <div class="heading">
        <h3 class="heading-text">Vacation Manager App v 1.0</h3>
        <router-link to="/"
          ><div class="back back-btn"><LeftArrow /></div
        ></router-link>
      </div>
      <h4 class="project-desc">App designed as an inhouse project in my previous company</h4>

      <div class="section">
        <h2>Problem statement</h2>
        <p>
          For manager's it's hard to track vacation easily. They want a quick
          and easy solution for viewing and managing vacations.
        </p>
        <h2>User requirements</h2>
        <h4 class="project-desc">The app should allow a user (manager):</h4>
        <ul>
          <li>View all vacations for a given period of time (6 months)</li>
          <li>Approve and reject vacations.</li>
          <li>Ability to quickly view vacation overlaps and take actions.</li>
        </ul>

        <h4 class="project-desc">The app should allow a user (employee):</h4>
        <ul>
          <li>
            View all their vacations for a given period of time (6 months)
          </li>
          <li>Create a new vacation request.</li>
        </ul>
      </div>

      <div class="section">
        <h2>wireframe - Home page</h2>
        <p>
          The home page should show easy summary of 6 month vacation status.
        </p>
        <ul>
          <li>This is the first screen user will see after login.</li>
          <li>Allows user to quickly get 6 months vacation status.</li>
          <li>
            Use of colours allows user to see for which month action is needed.
          </li>
          <li>Green - All good, no action needed.</li>
          <li>Yellow - No overlapping but some vacations needs approval.</li>
          <li>Red - Some upapproved vacations are overlapping with another.</li>
        </ul>
        <VacationManagerHome />
      </div>

      <div class="section">
        <h2>wireframe - Monthly Page</h2>
        <ul>
          <li>This is the monthly page after user clicks on a month card.</li>
          <li>Allows user to see vacation timeline for that month.</li>
          <li>Allows user to filter by vacation status.</li>
          <li>
            Use of colours allows user to see for which month action is needed.
          </li>
        </ul>
        <VacationManagerMonth />
      </div>

      <div class="section">
        <h2>wireframe - Action Page</h2>
        <ul>
          <li>
            This is a pop up when user clicks on vacation from previous page
          </li>
          <li>Allows user to approve or reject a vacation</li>
          <li>Allows user to add a note if needed.</li>
          <li>
            Once action is taken, the home and monthly timeline will reflect the
            changes.
          </li>
        </ul>
        <VacationManagerAction />
      </div>

      <div class="section">
        <h2>wireframe - Home Page: Employee</h2>
        <ul>
          <li>
            This is smilar to manager's view but employee can only view their
            vacations status.
          </li>
          <li>Use of color is similar as previous pages.</li>
          <li>
            The vacations are represented as circles here. Larger size means
            longer vacation.
          </li>
          <li>User can open unapproved vacation and edit or delete it.</li>
          <li>User can request a new vacation.</li>
        </ul>
        <VacationManagerHomeEmpl />
      </div>

      <div class="section">
        <h2>wireframe - Request new vacation</h2>
        <ul>
          <li>
            Finally a request form for vacation.
          </li>
          <li>This is very simple form.</li>
          <li>
            Upon submitting new request, the screens of manager and employee should be updated accordingly.
          </li>
        </ul>
        <VacationManagerRequest />
      </div>
      <div class="gutter">
        <div id="pagetop" class="top-btn" v-show="scY > 300" @click="toTop">
          <div class="up-btn"><UpArrow /></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import LeftArrow from "../assets/arrow-left.svg";
import UpArrow from "../assets/up-arrow-circle.svg";
import VacationManagerHome from "../assets/vacation-home.svg";
import VacationManagerHomeEmpl from "../assets/vacation-home-empl.svg";
import VacationManagerMonth from "../assets/vacation-month.svg";
import VacationManagerAction from "../assets/vacation-action.svg";
import VacationManagerRequest from "../assets/vacation-request.svg";

export default {
  name: "VacationManagerApp",
  components: {
    LeftArrow,
    VacationManagerHome,
    VacationManagerMonth,
    VacationManagerAction,
    VacationManagerHomeEmpl,
    VacationManagerRequest,
    UpArrow
  },
  data: function () {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.heading {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
}

h2 {
    font-size: xx-large;
    color: #4B53BC;
}

ul > li {
  margin-bottom: 15px;
  font-size: 1.7rem;
}

.figure {
  display: flex;
  justify-content: space-between;
}

.no-figure ul {
  width: 1200px;
}
</style>
