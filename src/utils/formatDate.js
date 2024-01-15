const formatDate = (date) => {
  const d = date * 1000;
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  // eslint-disable-next-line space-unary-ops
  return new Intl.DateTimeFormat("ru", options).format(new Date(d));
};

export default formatDate;
