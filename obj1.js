function emp(id,name,salary)
{
 this.rollno = id;
 this.name1 = name;
 this.salary1 = salary;   
}
e=new emp(105,"Lekshmi",65000);
document.write(e.rollno+" "+e.name1+" "+e.salary1);