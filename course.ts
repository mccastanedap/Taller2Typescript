
export class Course {
    name: string;
    professor: string;
    credits: number;
  
    constructor(name: string, professor: string, credits: number) {
      this.name = name;
      this.professor = professor;
      this.credits = credits;
    }
  }