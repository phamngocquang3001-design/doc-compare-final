import * as XLSX from 'xlsx';

export async function extractExcelCSV(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  // Read using xlsx
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  // Convert to CSV string, this allows AI to see the structured data easily
  const csvData = XLSX.utils.sheet_to_csv(worksheet);
  
  if (!csvData || csvData.trim() === '') {
    throw new Error('File Excel rỗng hoặc định dạng biểu mẫu quá phức tạp. Không thể đọc.');
  }

  return csvData;
}
