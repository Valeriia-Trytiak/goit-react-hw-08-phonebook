import React from 'react';
import { AnimationPhonebook } from './Lottie.styled';
import groovyWalkAnimation from './phonebook-animation.json';

const Animation = () => (
  <AnimationPhonebook animationData={groovyWalkAnimation} loop={true} />
);

export default Animation;
