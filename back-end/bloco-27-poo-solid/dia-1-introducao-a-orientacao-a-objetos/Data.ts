class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (!this.validateDate(day, month, year)) {
      this._day = 1;
      this._month = 1;
      this._year = 1990;

    }
    this._day = day;
    this._month = month;
    this._year = year;
  }
  getMonthName() {
    return 
  }
  private validateDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }

}

const testDate = new Data(29, 1, 1989);
console.log(testDate);


