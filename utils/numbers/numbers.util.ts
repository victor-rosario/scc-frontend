export function formatNumber(number: number): string {
    const absNumber = Math.abs(number);
    let formattedNumber = number.toLocaleString();
  
    if (absNumber >= 1000) {
      const abbreviations: Record<string, number> = {
        K: 1000,
        M: 1000000,
        B: 1000000000,
      };
  
      for (const abbreviation in abbreviations) {
        if (absNumber >= abbreviations[abbreviation]) {
          const roundedNumber = number / abbreviations[abbreviation];
          formattedNumber = roundedNumber.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          });
          formattedNumber += abbreviation;
          break;
        }
      }
    }
  
    return formattedNumber;
  }

  export const formatAmount = (n: number): string => (
    Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(n)
  )