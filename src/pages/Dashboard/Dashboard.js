import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '@/services/api';

import { Container, Time } from './Dashboard_Styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM d', { locale: enUS }), [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  api.get('appointments');
  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
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
