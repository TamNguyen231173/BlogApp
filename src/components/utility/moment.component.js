import moment from "moment";

export const Moment = ({ time }) => {
	return moment.utc(time).local().startOf("seconds").fromNow();
};
