import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '@/services/api';

import { Container, Time } from './Dashboard_Styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de algumacoisa</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08h</strong>
          <span>Luke Morales</span>
        </Time>
        <Time available>
          <strong>09h</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10h</strong>
          <span>Luke Morales</span>
        </Time>
        <Time>
          <strong>11h</strong>
          <span>Luke Morales</span>
        </Time>
      </ul>
    </Container>
  );
}
