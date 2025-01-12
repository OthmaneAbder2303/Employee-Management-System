import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [AlertComponent, DatePipe, FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})

export class EmployeeComponent implements OnInit {

  currentDate: Date = new Date();

  constructor(private snackBar: MatSnackBar) {}

  employeeService = inject(EmployeeService);

  employeeForm: FormGroup = new FormGroup({
    empId: new FormControl(0),
    empName: new FormControl('', Validators.required),
    empCode: new FormControl('', Validators.required),
    empEmailId: new FormControl('', [Validators.required, Validators.email]),
    empDesignation: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  employeeList: Employee[] = [];

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res: APIResponseModel) => {
        console.log('API Response:', res); // Log the entire response
        if (res.result) {
          this.employeeList = res.data;
          console.log('Employee List:', this.employeeList); // Log the parsed employee list
        } else {
          this.snackBar.open(res.message, 'Close', { duration: 3000 });
        }
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        this.snackBar.open('Failed to load employee data.', 'Close', { duration: 3000 });
      }
    });
  }
  

  onSaveEmployee(): void {
    const employee: Employee = this.employeeForm.value; // Use formValue directly

    // If empId is 0, create a new employee, otherwise update
    if (employee.empId == 0) {
      this.employeeService.addEmployee(employee).subscribe({
        next: (res: APIResponseModel) => {
          if (res.result) {
            this.snackBar.open('Employee Created Successfully', 'Close', { duration: 3000 });
            this.getAllEmployees(); // Refresh employee list
            this.onResetForm(); // Reset form after saving
          } else {
            this.snackBar.open(res.message, 'Close', { duration: 3000 });
          }
        },
        error: (err) => {
          console.error('Error saving employee:', err);
          this.snackBar.open('Failed to create employee.', 'Close', { duration: 3000 });
        }
      });
    } else {
      this.employeeService.updateEmployee(employee).subscribe({
        next: (res: APIResponseModel) => {
          if (res.result) {
            this.snackBar.open('Employee Updated Successfully', 'Close', { duration: 3000 });
            this.getAllEmployees(); // Refresh employee list
            this.onResetForm(); // Reset form after updating
          } else {
            this.snackBar.open(res.message, 'Close', { duration: 3000 });
          }
        },
        error: (err) => {
          console.error('Error updating employee:', err);
          this.snackBar.open('Failed to update employee.', 'Close', { duration: 3000 });
        }
      });
    }
  }

  onEdit(employee: Employee): void {
    this.employeeForm.setValue({
      empId: employee.empId,
      empName: employee.empName,
      empCode: employee.empCode,
      empEmailId: employee.empEmailId,
      empDesignation: employee.empDesignation,
      role: employee.role
    });
  }

  onDelete(empId: number): void {
    this.employeeService.deleteEmployee(empId).subscribe({
      next: (res: APIResponseModel) => {
        if (res.result) {
          this.snackBar.open('Employee Deleted Successfully', 'Close', { duration: 3000 });
          this.getAllEmployees(); // Refresh employee list
        } else {
          this.snackBar.open(res.message, 'Close', { duration: 3000 });
        }
      },
      error: (err) => {
        console.error('Error deleting employee:', err);
        this.snackBar.open('Failed to delete employee.', 'Close', { duration: 3000 });
      }
    });
  }

  onResetForm(): void {
    this.employeeForm.reset();
    this.employeeForm.patchValue({ empId: 0 }); // Ensure empId defaults to 0
  }
}
