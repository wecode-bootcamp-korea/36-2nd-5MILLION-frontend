import * as S from './Styled.ScheduleBox';

const ScheduleBox = ({ oneSchedule }) => {
  const { schedule, time, classes, level, spot, deadline } = oneSchedule;

  return (
    <S.Wrapper>
      <div>{schedule}</div>
      <div>{time}</div>
      <div>{classes}</div>
      <div>{level}</div>
      <div>{spot}</div>
      <S.BookNow disabled={deadline}>BOOK NOW</S.BookNow>
    </S.Wrapper>
  );
};

export default ScheduleBox;
