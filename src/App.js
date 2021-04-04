import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth, Storage } from "aws-amplify";
import aws_exports from "./aws-exports";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "isometric-css";
Amplify.configure(aws_exports);

const App = () => {
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (err) {
      console.log("Error uploading file: ", err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TransformWrapper
          options={{ limitToBounds: false }}
          wheel={{ step: 45 }}
        >
          <TransformComponent>
            <div class="code-example-world" data-rotation-value={200}>
              <div
                class="isometric floor"
                data-view="top"
                data-texture="https://sc01.alicdn.com/kf/HTB1GlxpMXXXXXcrXVXXq6xXFXXXt/222985328/HTB1GlxpMXXXXXcrXVXXq6xXFXXXt.jpg_.webp"
                data-texture-size="150px 100px"
                data-texture-pixelated="true"
              ></div>
              <div class="isometric">
                <div
                  class="isometric sproom-wall-x"
                  data-view="front"
                  data-top="0"
                  data-left="500"
                  data-texture="https://www.3dxo.com/images/textures/s/stonetile1.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric sproom-floor"
                  data-view="top"
                  data-top="0"
                  data-left="500"
                  data-texture="https://www.3dxo.com/images/textures/s/stonetile1.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric sproom-wall-x"
                  data-view="front"
                  data-top="0"
                  data-right="350"
                  data-left="500"
                  style={{ zIndex: 10 }}
                  data-texture="https://www.3dxo.com/images/textures/s/stonetile1.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric sproom-wall-y"
                  data-view="side"
                  data-left="700"
                  data-texture="https://www.3dxo.com/images/textures/s/arroway.de_concrete44_d100.png"
                  style={{ zIndex: 10 }}
                  data-texture-pixelated="true"
                >
                  <h5
                    style={{
                      fontSize: 70,
                      color: "black",
                      marginTop: -88,
                      textAlign: "left",
                    }}
                  >
                    防音ブース
                  </h5>
                </div>
                <div
                  class="isometric sproom-wall-y"
                  data-view="side"
                  data-left="500"
                  data-texture="https://www.3dxo.com/images/textures/s/arroway.de_concrete44_d100.png"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric toilet-wall-y"
                  style={{ opacity: 1 }}
                  data-view="side"
                  data-left="150"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                >
                  <h5
                    style={{
                      fontSize: 70,
                      color: "black",
                      marginTop: -88,
                      textAlign: "left",
                    }}
                  >
                    お手洗い
                  </h5>
                </div>
                <div
                  class="isometric toilet-wall-x"
                  data-view="front"
                  data-top="0"
                  data-right="350"
                  data-left="0"
                  style={{ opacity: 1 }}
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric toilet-floor"
                  data-view="top"
                  data-top="0"
                  data-left="0"
                  data-texture="https://thumbs.dreamstime.com/b/black-rough-cast-iron-texture-background-good-view-170034186.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: -1, opacity: 0.6 }}
                  class="isometric wall"
                  data-view="side"
                  data-left="0"
                  data-texture="https://www.3dxo.com/images/textures/s/arroway.de_concrete23_d100.png"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: -1 }}
                  class="isometric wall"
                  data-view="front"
                  data-left="0"
                  data-texture="https://www.3dxo.com/images/textures/s/arroway.de_concrete23_d100.png"
                  data-texture-pixelated="true"
                >
                  <h5
                    style={{
                      fontSize: 196,
                      color: "white",
                      textShadow: "-4px 1px 24px rgba(0,0,0,.2)",
                      marginTop: -200,
                      textAlign: "left",
                      fontFamily: "Lobster",
                    }}
                  >
                    Hackable Cafe
                  </h5>
                </div>
                <div
                  style={{ zIndex: 10 }}
                  class="isometric door1"
                  data-view="side"
                  data-left="150"
                  data-right="0"
                  data-texture="https://i.pinimg.com/originals/71/68/61/716861e10e4ae27129768693c5a661a0.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 11, width: 300, height: 350 }}
                  class="isometric"
                  data-view="side"
                  data-top="100"
                  data-left="0"
                  data-right="350"
                  data-texture="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1610044505000/photosp/b232c894-73b7-42e9-aef6-30867302e756/stock-photo-blur-alcohol-bar-cafe-bottle-wine-beverage-background-beer-b232c894-73b7-42e9-aef6-30867302e756.jpg"
                  data-texture-pixelated="true"
                ></div>

                <div
                  style={{ zIndex: 10 }}
                  class="isometric door1"
                  data-view="side"
                  data-left="700"
                  data-right="50"
                  data-texture="https://previews.123rf.com/images/rafka88/rafka882004/rafka88200400007/145846449-door-texture-beige-color-for-modern-interior-3d-render.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 10 }}
                  class="isometric entrance"
                  data-view="side"
                  data-left="1200"
                  data-right="750"
                  data-texture="https://4.imimg.com/data4/CH/XX/MY-3172032/modern-glass-door-500x500.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 10 }}
                  class="isometric door1"
                  data-view="side"
                  data-right="500"
                  data-texture="https://previews.123rf.com/images/rafka88/rafka882004/rafka88200400007/145846449-door-texture-beige-color-for-modern-interior-3d-render.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: -1 }}
                  class="isometric screen"
                  data-view="side"
                  data-top="0"
                  data-right="660"
                  data-texture="https://previews.123rf.com/images/rafka88/rafka882004/rafka88200400007/145846449-door-texture-beige-color-for-modern-interior-3d-render.jpg"
                  data-texture-pixelated="true"
                >
                  <h5
                    style={{
                      fontSize: 40,
                      color: "white",
                      marginTop: -76,
                      marginBottom: 16,
                      textAlign: "left",
                    }}
                  >
                    100インチスクリーン
                  </h5>
                  <iframe
                    width="540"
                    height="450"
                    src="https://www.youtube.com/embed/S8mBQ6BvbBU?autoplay=1&mute=1&playsinline=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-x"
                  data-view="front"
                  data-left="0"
                  data-right="1100"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-x"
                  data-view="front"
                  data-left="0"
                  data-right="1200"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-y"
                  data-view="side"
                  data-right="1100"
                  data-left="100"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-x"
                  data-view="front"
                  data-left="0"
                  data-right="400"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-x"
                  data-view="front"
                  data-left="0"
                  data-right="500"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 1, opacity: 0.1 }}
                  class="isometric pillar-y"
                  data-view="side"
                  data-right="400"
                  data-left="100"
                  data-texture="https://i.pinimg.com/originals/6c/2a/90/6c2a904007dadd4ee54457284a2ecf94.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric desk"
                  data-view="top"
                  style={{ zIndex: 10, opacity: 1 }}
                  data-top="150"
                  data-left="100"
                  data-right="900"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                >
                  <h5
                    style={{
                      fontSize: 44,
                      color: "white",
                      marginTop: -60,
                      textAlign: "left",
                    }}
                  >
                    フリーアドレスデスク
                  </h5>
                </div>
                <div
                  style={{
                    zIndex: 8,
                    width: 500,
                    height: 150,
                    background: "#333",
                    boxShadow: "-8px -8px 0 0 #00000",
                  }}
                  class="isometric counter2"
                  data-view="front"
                  data-top="0"
                  data-left="200"
                  data-right="1000"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 10, opacity: 1 }}
                  class="isometric desk2"
                  data-view="top"
                  data-top="150"
                  data-left="1100"
                  data-right="0"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                >
                  <h5
                    class="vertical-text"
                    style={{ fontSize: 60, color: "white", marginLeft: 80 }}
                  >
                    専用デスク
                  </h5>
                </div>
                <div
                  style={{ zIndex: 100 }}
                  class="isometric counter"
                  data-view="top"
                  data-top="100"
                  data-left="150"
                  data-right="400"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                >
                  <h5
                    class="vertical-text"
                    style={{ fontSize: 40, color: "white", marginLeft: -60 }}
                  >
                    カウンター
                  </h5>
                </div>
                <div
                  style={{ zIndex: 100 }}
                  class="isometric counter2"
                  data-view="top"
                  data-top="100"
                  data-left="0"
                  data-right="600"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 10, width: 250, height: 100 }}
                  class="isometric counter"
                  data-view="side"
                  data-top="0"
                  data-left="200"
                  data-right="400"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                ></div>
                <div
                  style={{ zIndex: 10, width: 200, height: 100 }}
                  class="isometric counter2"
                  data-view="front"
                  data-top="0"
                  data-left="0"
                  data-right="650"
                  data-texture="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric chair"
                  data-view="top"
                  data-top="50"
                  data-left="950"
                  data-right="0"
                  data-texture="https://preview.pixlr.com/images/800wm/1155/2/1155200205.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric chair"
                  data-view="top"
                  data-top="50"
                  data-left="950"
                  data-right="200"
                  data-texture="https://preview.pixlr.com/images/800wm/1155/2/1155200205.jpg"
                  data-texture-pixelated="true"
                ></div>
                <div
                  class="isometric chair"
                  data-view="top"
                  data-top="50"
                  data-left="950"
                  data-right="400"
                  data-texture="https://preview.pixlr.com/images/800wm/1155/2/1155200205.jpg"
                  data-texture-pixelated="true"
                ></div>
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </header>
    </div>
  );
};

export default withAuthenticator(App, true);
