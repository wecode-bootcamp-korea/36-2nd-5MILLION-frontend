import * as S from './Styled.ScheduleBox';

const ScheduleBox = ({ oneSchedule, setDetailToggle, setBooking }) => {
  const scheduleList = [];
  const isOpenModal = e => {
    setDetailToggle(true);
    setBooking(e.target.id);
  };

  oneSchedule?.map(
    ({
      dayofweek,
      day,
      startTime,
      endTime,
      classes,
      classType,
      bookedCount,
      quantity,
      id,
    }) =>
      scheduleList.push({
        dayofweek,
        day,
        startTime,
        endTime,
        classes,
        classType,
        bookedCount,
        quantity,
        id,
      })
  );

  return scheduleList.map(
    (
      {
        dayofweek,
        day,
        startTime,
        endTime,
        classType,
        quantity,
        bookedCount,
        id,
      },
      idx
    ) => {
      const spots = quantity - Number(bookedCount);
      const deadline = spots === 0 ? true : false;
      const classTypes = classType.charAt(0).toUpperCase() + classType.slice(1);
      return (
        <S.Wrapper key={idx}>
          <div>
            {CALENDAR[dayofweek]}-{MONTH}
            &nbsp;{day},&nbsp;{YEAR}
          </div>
          <div>
            {startTime} - {endTime} PM
          </div>
          <div>{classTypes}</div>
          <div>{`${spots} Spots Left`}</div>
          <S.BookNow id={id} disabled={deadline} onClick={isOpenModal}>
            BOOK NOW
          </S.BookNow>
        </S.Wrapper>
      );
    }
  );
};

export default ScheduleBox;

const CALENDAR = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday,',
  Thu: 'Tuesday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

const NOW = new Date();
const MONTH = NOW.toLocaleString('en-US', { month: 'long' });
const YEAR = NOW.getFullYear();
