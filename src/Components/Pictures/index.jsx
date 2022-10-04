import * as S from "./styles";
import React, { useState, Component} from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Frete from '../../Assets/Images/frete.png';
import Frete1 from '../../Assets/Images/frete1.png';


export function Pictures() {
  return (
    <>
  <S.Carrousel>
  
  <Carousel autoPlay>
    <div>
    <img src={Frete1} />
    </div>
    <div>
    <img src={Frete} />
    </div>
    </Carousel>

  </S.Carrousel>
  
    </>
  );
}
