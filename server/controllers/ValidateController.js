const ExcelJS = require("exceljs");
const ValidatedEmail = require("../models/ValidatedEmail");

exports.uploadEmails = async (req, res) => {
  const { fileName, emails } = req.body; // emails: [{ address, status }]

  // Save to DB
  const saved = await ValidatedEmail.create({ fileName, emails });

  // Generate Excel
  const workbook = new ExcelJS.Workbook();
  const sheets = { valid: [], invalid: [], risky: [] };

  emails.forEach(e => sheets[e.status].push(e.address));

  for (let key in sheets) {
    const sheet = workbook.addWorksheet(key);
    sheet.addRow(["Email Address"]);
    sheets[key].forEach(email => sheet.addRow([email]));
  }

  const filePath = `./downloads/${saved._id}.xlsx`;
  await workbook.xlsx.writeFile(filePath);

  saved.downloadLink = `/downloads/${saved._id}.xlsx`;
  await saved.save();

  res.status(201).json(saved);
};
exports.getRecentValidations = async (req, res) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const history = await ValidatedEmail.find({
    uploadedAt: { $gte: thirtyDaysAgo },
  }).sort({ uploadedAt: -1 });

  res.json(history);
};
