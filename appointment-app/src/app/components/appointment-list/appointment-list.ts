import { Component } from '@angular/core';
import { Appointment } from '../../interface/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList {
  appointment: Appointment[] = [];

  inputAppointmentTitle: string = '';
  inputAppointmentDate: Date | null = null;

  handleAddAppointment() {
    if (this.inputAppointmentTitle.trim().length > 0 && this.inputAppointmentDate !== null) {
      const appointmentObj: Appointment = {
        id: Math.random() * 100,
        title: this.inputAppointmentTitle,
        date: this.inputAppointmentDate,
      };

      this.appointment.push(appointmentObj);

      this.inputAppointmentTitle = '';
      this.inputAppointmentDate = null;
    } else {
      alert('Both of them are required');
    }
  }

  handleDeleteAppointment(index: number) {
    this.appointment.splice(index, 1);
  }
}
