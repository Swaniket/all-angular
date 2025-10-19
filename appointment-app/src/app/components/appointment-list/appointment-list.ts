import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interface/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {
  appointment: Appointment[] = [];

  inputAppointmentTitle: string = '';
  inputAppointmentDate: Date | null = null;

  ngOnInit() {
    const appointments = localStorage.getItem('appointments');

    if (appointments) {
      this.appointment = JSON.parse(appointments);
    }
  }

  handleAddAppointment() {
    if (this.inputAppointmentTitle.trim().length > 0 && this.inputAppointmentDate !== null) {
      const appointmentObj: Appointment = {
        id: Math.random() * 100,
        title: this.inputAppointmentTitle,
        date: this.inputAppointmentDate,
      };

      this.appointment.push(appointmentObj);

      localStorage.setItem('appointments', JSON.stringify(this.appointment));

      this.inputAppointmentTitle = '';
      this.inputAppointmentDate = null;
    } else {
      alert('Both of them are required');
    }
  }

  handleDeleteAppointment(index: number) {
    this.appointment.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointment));
  }
}
