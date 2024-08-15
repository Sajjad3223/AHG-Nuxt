import { createReadStream } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  // مسیر فایل PDF را تعیین کنید
  const pdfPath = resolve('public', 'files', 'support', 'AHG-300-Instruction-Manual.pdf');

  // هدرهای مورد نظر را تنظیم کنید قبل از ارسال فایل
  event.node.res.setHeader('Content-Type', 'application/pdf');
  event.node.res.setHeader('Content-Disposition', 'inline; filename="AHG-300-Instruction-Manual.pdf"');

  // سرو کردن فایل PDF با استفاده از stream
  const fileStream = createReadStream(pdfPath);

  // فایل را به خروجی ارسال کنید
  return sendStream(event, fileStream);
});
