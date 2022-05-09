<template>
  <div class="page">
    <div class="container">
      <div class="heading">
        <h3 class="heading-text">A portable smart camera v 1.0</h3>
        <router-link to="/"
          ><div class="back back-btn"><LeftArrow /></div
        ></router-link>
      </div>

      <h4 class="project-desc">My attempt at a fun 3D design project</h4>

      <div class="section">
        <h2>Problem statement</h2>
        <p>
          As a camera enthusiast and a photographer, I always wanted latest
          gears. Even though the upgrades are marginal often. I am a big fan of
          small and portable camera with no interchangeable lens, yet with
          advantages of several lenses, similar to smartphones of today. So, my
          ideal camera would be very similar to smartphones but with bigger
          sensors and dedictaed functionality of photography. What would that
          camera look like? This is my take on that.
        </p>
        <h2>User requirements</h2>
        <ul>
          <li>Smaller form factor</li>
          <li>Great image quality</li>
          <li>Professional video features</li>
          <li>Ease of use</li>
          <li>cheaper price (~$1000)</li>
          <li>Great looking design (subjective)</li>
        </ul>
      </div>
      <h2>Design</h2>
      <p>
        The designs are based on google pixel original phone as I was big fan of
        it's camera system.
      </p>
      <div class="section">
        <h2>wireframe - Camera front</h2>
        <div class="figure">
          <ul>
            <li>This is the camera front / top view.</li>
            <li>The camera is inspired by smartphones.</li>
            <li>
              The camera has multiple lens for different shooting situations.
              These sensors should be larger than a typical smartphones.
            </li>
          </ul>
          <img :src="CameraFront" />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Camera bottom side</h2>
        <div class="figure">
          <ul>
            <li>This is the view from side-bottom.</li>
            <li>
              The bottom of camera has a tripod mount and battery container.
              Minimalist design :)
            </li>
            <li>
              A good amount of hand grip needed for better handling. On second
              thought, the grip can be used to hold battery just like other
              cameras. This will allow a bigger battery.
            </li>
          </ul>
          <img :src="CameraSide1" />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Camera side angle</h2>
        <div class="figure">
          <ul>
            <li>This view shows headphone / mic ports and SD card slot.</li>
            <li>
              Also present is usb-c and mini micro ports for charing and data
              transfer. Micro usb port is probably not needed.
            </li>
          </ul>
          <img :src="CameraSide2" />
        </div>
      </div>

      <div class="section">
        <h2>wireframe - Camera back</h2>
        <div class="figure">
          <ul>
            <li>This is the camera back view</li>
            <li>The camera contains a big touch screen, around 5.5 inches.</li>
            <li>
              The software interface is task for another day but I am assuming
              some form of android OS, given it's based on Google Pixel.
            </li>
            <li>It features speakers / inbuilt micrphones as well.</li>
            <li>
              Missing is the hotshoe mount for attaching external accessories.
              But I assume bluetooth and NFC might take care of that.
            </li>
          </ul>
          <img :src="CameraBack" />
        </div>
      </div>

      <div class="section" id="backupcloseup">
        <h2>wireframe - Camera back closeup</h2>
        <div class="figure">
          <ul>
            <li>This is the camera back closeup view.</li>
            <li>It just shows the top plate in more details.</li>
          </ul>
          <img :src="CameraBackCloseup" />
        </div>
      </div>
      <p>
        And that's it. This was a fun project and my first time hands on with a
        3D design app on iPad. This design is not industrial ready by any means.
        Just a draft 3D wireframe if you will :) . Thanks for viewing.
      </p>
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
import CameraFront from "../assets/camera-front.png";
import CameraSide1 from "../assets/camera-side1.png";
import CameraSide2 from "../assets/camera-side2.png";
import UpArrow from "../assets/up-arrow-circle.svg";
import CameraBack from "../assets/camera-back.png";
import CameraBackCloseup from "../assets/camera-back-closeup.png";

export default {
  name: "PerfectCameraApp",
  components: {
    LeftArrow,
    UpArrow,
  },
  data: function () {
    return {
      CameraFront,
      CameraSide1,
      CameraSide2,
      CameraBack,
      CameraBackCloseup,
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

<style scoped>
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
  color: #4b53bc;
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
