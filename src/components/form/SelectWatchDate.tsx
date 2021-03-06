import { ChangeEventHandler, memo, VFC } from 'react';

type Props = {
  year: string;
  month: string;
  day: string;
  onChangeYear: ChangeEventHandler<HTMLSelectElement>;
  onChangeMonth: ChangeEventHandler<HTMLSelectElement>;
  onChangeDay: ChangeEventHandler<HTMLSelectElement>;
};

export const SelectWatchDate: VFC<Props> = memo((props) => {
  const { year, month, day, onChangeYear, onChangeMonth, onChangeDay } = props;

  return (
    <div>
      <label>鑑賞日:</label>
      <br />
      <select
        className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
        name='year'
        value={year}
        onChange={onChangeYear}
      >
        <option value='2015'>2015</option>
        <option value='2016'>2016</option>
        <option value='2017'>2017</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
        <option value='2025'>2025</option>
      </select>{' '}
      年{' '}
      <select
        className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
        name='month'
        value={month}
        onChange={onChangeMonth}
      >
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
      </select>{' '}
      月{' '}
      <select
        className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
        name='day'
        value={day}
        onChange={onChangeDay}
      >
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
        <option value='16'>16</option>
        <option value='17'>17</option>
        <option value='18'>18</option>
        <option value='19'>19</option>
        <option value='20'>20</option>
        <option value='21'>21</option>
        <option value='22'>22</option>
        <option value='23'>23</option>
        <option value='24'>24</option>
        <option value='25'>25</option>
        <option value='26'>26</option>
        <option value='27'>27</option>
        <option value='28'>28</option>
        <option value='29'>29</option>
        <option value='30'>30</option>
        <option value='31'>31</option>
      </select>{' '}
      日{' '}
    </div>
  );
});
