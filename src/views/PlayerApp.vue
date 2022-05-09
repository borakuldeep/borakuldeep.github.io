<template>
  <div class="page">
    <div class="container">
      <div class="heading">
        <h3 class="heading-text">Player Evaluation App v 1.0</h3>
        <router-link to="/"
          ><div class="back back-btn"><LeftArrow /></div
        ></router-link>
      </div>
      <h4 class="project-desc">A concept app from a design challenge I attemped</h4>

      <div class="section">
        <h2>Problem statement</h2>
        <p>
          A coach from the amateur football team “Blindside Beavers” is
          evaluating his athletes. The coach wants to input, share and display
          the evaluation to the athlete with his mobile app. Create a
          low-fidelity interaction flow that helps the coach and athlete to keep
          track of their development on their mobile app.
        </p>
        <h2>User requirements</h2>
        <h5>The app should allow a user (coach):</h5>
        <ul>
          <li>View and search players on the team.</li>
          <li>
            Input new evaluation based on last game performance. This includes
            adding any observations and improvement points.
          </li>
          <li>
            Ability to share the evaluation to players via email or messaging
            app.
          </li>
          <li>Able to view previous evaluation.</li>
          <li>Able to view previous and upcoming team matches.</li>
        </ul>
      </div>

      <div class="section">
        <h2>User onboarding</h2>
        <p>
          After user installed the app and opens first time, the onboarding
          screens will guide user how to use the app.
        </p>
        <Onboarding />
      </div>

      <div class="section">
        <h2>wireframe - Login screen</h2>
        <div class="figure">
          <p>A Login screen - pretty standard looking. Nothing too fancy.</p>
          <LoginScreen />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Home screen</h2>
        <div class="figure">
          <ul>
            <li>This is the first screen user will see after login.</li>
            <li>Allows user to view, search and add players.</li>
            <li>
              User is able to see his current players rating and an indication
              whether the ratings improved or got lower compared to last time.
            </li>
            <li>User will be able to search player by name.</li>
          </ul>
          <PlayersScreen />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Add Evaluation</h2>
        <div class="figure">
          <div>
            <ul>
              <li>
                User will be able to add new evaluation when clicking on a
                player from previous screen.
              </li>
              <li>
                The circles are showing different evaluation metrics and their
                score for the player.
              </li>
              <li>
                On tap on any circle, the user will be able to use slider to
                change the rating.
              </li>
              <li>User will be able to add any observations.</li>
              <li>
                User will be able to see last evaluation ratings for comparison.
              </li>
              <li>
                The circles will be colored differently in real app for easier
                readability.
              </li>
            </ul>
            <CircleNotes />
          </div>
          <PlayersDetailScreen />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Publish and Share</h2>
        <div class="figure">
          <div>
            <ul>
              <li>
                Upon clicking ‘publish’ on previous screen, the user will see
                this screen.
              </li>
              <li>They can share this document with other people.</li>
              <li>
                If a player is using the app, they will also see their profile
                for quick feedback.
              </li>
            </ul>
            <ProfileNote />
            <p>
              Common general profiles are: <b>specialist</b>,
              <b>twin skills</b>, <b>triple skills</b>, <b>well-rounder</b>,
              <b>multi-skilled</b>.
            </p>
          </div>
          <PlayerReadOnly />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Team matches</h2>
        <div class="figure">
          <ul>
            <li>
              User will be able to see upcoming and previous matches here.
            </li>
            <li>
              Assumption - games status will be retrieved by some api and
              updated accordingly here.
            </li>
          </ul>
          <TeamScreen />
        </div>
      </div>

      <div class="section">
        <h2>Approach and constraints</h2>
        <div class="no-figure">
          <ul>
            <li>
              The main goal was the app should be easier to add / edit players
              evaluation. I went with circles representing metrics because a
              visual chart is much better in understanding quantitative data.
            </li>
            <li>
              Because of the mobile screen size, I went with 6 main metrics
              categories. It should be possible to add another screen which
              allows user to add any single category with more details.
            </li>
            <li>
              Some screens are left out for assumption because of time
              constraints - add-user screen, add-game screen, signup screen,
              my-info screen.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <FullApp />
        <div class="section">
          <p>That's all for now.</p>
        </div>
        <div class="gutter">
          <div id="pagetop" class="top-btn" v-show="scY > 300" @click="toTop">
            <div class="up-btn"><UpArrow /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftArrow from "../assets/arrow-left.svg";
import UpArrow from "../assets/up-arrow-circle.svg";
import Onboarding from "../assets/onboarding.svg";
import LoginScreen from "../assets/login.svg";
import PlayersScreen from "../assets/players.svg";
import PlayersDetailScreen from "../assets/player-details.svg";
import CircleNotes from "../assets/circle-note.svg";
import PlayerReadOnly from "../assets/player-readonly.svg";
import ProfileNote from "../assets/general-profile-note.svg";
import TeamScreen from "../assets/teams.svg";
import FullApp from "../assets/fullapp.svg";
export default {
  name: "PlayerApp",
  components: {
    LeftArrow,
    UpArrow,
    Onboarding,
    LoginScreen,
    PlayersScreen,
    PlayersDetailScreen,
    CircleNotes,
    PlayerReadOnly,
    ProfileNote,
    TeamScreen,
    FullApp,
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
