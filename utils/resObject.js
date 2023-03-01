const responseObject = (status, message, data, error) => {
  const response = {
    status,
    message,
    data,
    error,
  };

  return response;
};

module.exports = responseObject;
