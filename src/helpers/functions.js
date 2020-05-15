import classnames from "classnames";
import * as Yup from "yup";

export function getTextClass(size) {
  return classnames({
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg"
  });
}

export function getUserInformationSchema() {
  let thirteenYearsAgo = new Date();
  thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);

  return {
    firstName: Yup.string()
      .min(2, "First name is too short.")
      .max(32, "First name is too long.")
      .required("First name is required."),
    lastName: Yup.string()
      .min(2, "Last name is too short.")
      .max(32, "Last name is too long.")
      .required("Last name is required."),
    dateOfBirth: Yup.date()
      .max(thirteenYearsAgo, "You can't use Playnow if you are younger than 13")
      .required(),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required.")
  };
}

export function getSetPasswordSchema() {
  return {
    password: Yup.string()
      .min(6, "Password should be at least 6 characters long.")
      .matches(/[a-z]/, "Password should have at least one lowercase letter.")
      .matches(/[A-Z]/, "Password should have at least one uppercase letter.")
      .matches(/\d+/, "Password should have at least one number.")
      .notOneOf([Yup.ref("oldPassword"), null], "Passwords must not match.")
      .required("New Password is required.")
  };
}

export function getDatePickerValues() {
  const days = new Array(31).fill(0).map((_, index) => {
    return { value: index + 1, label: index + 1 };
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ].map((month, index) => {
    return { value: index + 1, label: month };
  });

  const currentYear = new Date().getFullYear();
  const years = new Array(100).fill(0).map((_, index) => {
    const year = currentYear - index;
    return { value: index + 1, label: year };
  });

  return {
    days: days,
    months: months,
    years: years
  };
}

export function getInitialDatePickerValues(date) {
  const datePickerValues = getDatePickerValues();

  const day = datePickerValues.days.find(d => d.value === date.getDate());
  const month = datePickerValues.months.find(m => m.value === date.getMonth());
  const year = datePickerValues.years.find(y => y.label === date.getFullYear());

  return {
    day: day.value,
    month: month.value,
    year: year.value
  };
}
