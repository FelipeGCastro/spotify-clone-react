import React from "react";
import Slider from "rc-slider";
import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  ProgressSlider,
  Time
} from "./styles";

import VolumeIcon from "../../Assets/images/volume.svg";
import BackwardIcon from "../../Assets/images/backward.svg";
import PlayIcon from "../../Assets/images/play.svg";
import PauseIcon from "../../Assets/images/pause.svg";
import ShuffleIcon from "../../Assets/images/shuffle.svg";
import ForwardIcon from "../../Assets/images/forward.svg";
import RepeatIcon from "../../Assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
        alt="Qualquer coisa"
      />
      <div>
        <span>Times like These</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        <button>
          <img src={PlayIcon} alt="Play" />
        </button>

        <button>
          <img src={ForwardIcon} alt="Foword" />
        </button>

        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
