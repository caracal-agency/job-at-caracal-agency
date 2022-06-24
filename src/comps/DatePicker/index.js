import { useDayzed } from 'dayzed';
import { useEffect, useState } from 'react';

const monthNamesFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdayNamesShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function Calendar({ children }) {
	return <div className="w-full">{children}</div>;
}

function Month({ children }) {
	return <div className="grid grid-cols-7 gap-1">{children}</div>;
}

function DayOfMonth(props) {
	const { selected, unavailable, today, isInRange } = props;

	let cellStyle = '';
	if (today) cellStyle = 'bg-blue-200 text-blue-900';
	if (selected || isInRange) cellStyle = 'bg-purple-200 text-purple-900';
	if (unavailable) cellStyle = 'opacity-25 cursor-not-allowed';

	return (
		<button type="button" className={`${cellStyle} col-span-1 text-center rounded-md`} {...props}>
			{props.children}
		</button>
	);
}

function DayOfMonthEmpty({ children }) {
	return <div className="bg-red col-span-1 text-center">{children}</div>;
}

function RangeDatePicker(props) {
	const [hoveredDate, setHoveredDate] = useState(null);

	let { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed(props);

	useEffect(() => {
		function navigate(e) {
			switch (e.keyCode) {
				case 37: // leftArrow
					getKeyOffset(-1);
					break;
				case 38: // leftArrow
					getKeyOffset(-7);
					break;
				case 39: // leftArrow
					getKeyOffset(1);
					break;
				case 40: // leftArrow
					getKeyOffset(7);
					break;
				default:
					break;
			}
		}

		window.addEventListener('keydown', navigate);

		return () => window.removeEventListener('keydown', navigate);
	});

	function getKeyOffset(number) {
		const e = document.activeElement;
		let buttons = document.querySelectorAll('button');

		buttons.forEach((el, i) => {
			const newNodeKey = i + number;
			if (el == e) {
				if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
					buttons[newNodeKey].focus();
				} else {
					buttons[0].focus();
				}
			}
		});
	}

	function onMouseLeave() {
		setHoveredDate(null);
	}

	function onMouseEnter(date) {
		if (!props.selected.length) return;

		setHoveredDate(date);
	}

	function isInRange(date) {
		let { selected } = props;

		if (selected.length) {
			let firstSelected = selected[0].getTime();
			if (selected.length === 2) {
				let secondSelected = selected[1].getTime();
				return firstSelected < date && secondSelected > date;
			} else {
				return hoveredDate && ((firstSelected < date && hoveredDate >= date) || (date < firstSelected && date >= hoveredDate));
			}
		}

		return false;
	}

	if (calendars.length) {
		return (
			<Calendar onMouseLeave={onMouseLeave}>
				<div className="flex justify-between">
					<button {...getBackProps({ calendars })}>Back</button>
					<button {...getForwardProps({ calendars })}>Next</button>
				</div>
				<div className="flex flex-col sm:flex-row sm:justify-around">
					{calendars.map((calendar) => (
						<Month key={`${calendar.month}${calendar.year}`}>
							<div className="col-span-7 flex justify-center py-2">
								{monthNamesFull[calendar.month]} {calendar.year}
							</div>

							{weekdayNamesShort.map((weekday) => (
								<DayOfMonthEmpty key={`${calendar.month}${calendar.year}${weekday}`}>{weekday}</DayOfMonthEmpty>
							))}

							{calendar.weeks.map((week, windex) =>
								week.map((dateObj, index) => {
									let key = `${calendar.month}${calendar.year}${windex}${index}`;
									if (!dateObj) {
										return <DayOfMonthEmpty key={key} />;
									}

									let { date, selected, selectable, today } = dateObj;

									return (
										<DayOfMonth
											key={key}
											{...getDateProps({
												dateObj,
												onMouseEnter: () => onMouseEnter(date),
											})}
											selected={selected}
											unavailable={!selectable}
											today={today}
											isInRange={isInRange(date)}
										>
											{date.getDate()}
										</DayOfMonth>
									);
								})
							)}
						</Month>
					))}
				</div>
			</Calendar>
		);
	}

	return null;
}

export default function Range(props) {
	const [selectedDates, setSelectedDates] = useState([]);
	const [date] = useState(new Date());

	function _handleOnDateSelected({ selected, selectable, date }) {
		if (!selectable) return;

		let dateTime = date.getTime();
		let newDates = [...selectedDates];
		if (selectedDates.length) {
			if (selectedDates.length === 1) {
				let firstTime = selectedDates[0].getTime();

				if (firstTime < dateTime) newDates.push(date);
				else newDates.unshift(date);

				setSelectedDates(newDates);
			} else if (newDates.length === 2) {
				setSelectedDates([date]);
			}
		} else {
			newDates.push(date);
			setSelectedDates(newDates);
		}
	}

	let minDate = new Date();
	minDate.setDate(minDate.getDate() - 1);

	return (
		<>
			<RangeDatePicker minDate={minDate} date={date} selected={selectedDates} onDateSelected={_handleOnDateSelected} monthsToDisplay={2} />
			{selectedDates.length === 2 && (
				<div style={{ paddingTop: 20, textAlign: 'center' }}>
					<p>Selected:</p>
					<p>{`${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`}</p>
				</div>
			)}
		</>
	);
}

// ? taken from https://codesandbox.io/s/range-date-picker-forked-5kegrk
