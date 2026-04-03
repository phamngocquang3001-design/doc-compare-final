export type AIProvider = 'gemini' | 'openai';
export type ItemCodeLocation = 'auto' | 'separate_column' | 'in_name';

export type CompareField = 'itemName' | 'itemCode' | 'unit' | 'quantity' | 'unitPrice' | 'totalPrice';

export interface LineItem {
  id: string;
  originalIndex: number;
  itemCode: string | null;
  itemName: string;
  quantity: number | null;
  unitPrice: number | null;
  totalPrice: number | null;
  unit: string | null;
}

export interface DocumentData {
  fileName: string;
  documentType: string;
  documentNumber: string;
  date: string;
  lineItems: LineItem[];
}

export type MatchStatus = 'MATCH_PERFECT' | 'MATCH_GOOD' | 'MATCH_MODERATE' | 'MATCH_WEAK' | 'MISSING' | 'MISMATCH';

export interface ComparisonDetail {
  status: MatchStatus;
  matchScore: number;
  matchedItem?: LineItem;
  discrepancies: string[];
  suggestions?: { item: LineItem; score: number }[];
}

export interface ComparisonResult {
  baseItem: LineItem;
  comparisons: Record<string, ComparisonDetail>;
}

export interface ReportData {
  baseFile: DocumentData;
  otherFiles: DocumentData[];
  results: ComparisonResult[];
  extraItems?: Record<string, LineItem[]>;
  compareFields: CompareField[];
}