const calculateAge = (birthDate, ageSuffix) => {
  const ageDifMs = Date.now() - new Date(birthDate).getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return (
    Math.abs(ageDate.getUTCFullYear() - 1970) +
    " " +
    (ageSuffix ? ageSuffix.trim() : "")
  );
};

export default calculateAge;
