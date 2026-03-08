module.exports = (data) => {
  const required = ['companyName', 'province', 'industry'];
  const missing = required.filter(f => !data[f]);
  return { valid: missing.length === 0, missing };
};
