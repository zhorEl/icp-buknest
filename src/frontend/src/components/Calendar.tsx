import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, X } from 'lucide-react';

interface CalendarProps {
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
  availableDates?: string[]; // Array of date strings in YYYY-MM-DD format
  bookedDates?: string[]; // Array of booked date strings
  unavailableDates?: string[]; // Array of unavailable date strings
  minDate?: Date;
  maxDate?: Date;
  showTimeSlots?: boolean;
  timeSlots?: string[];
  selectedTimeSlot?: string;
  onTimeSlotSelect?: (timeSlot: string) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Calendar({
  selectedDate,
  onDateSelect,
  availableDates = [],
  bookedDates = [],
  unavailableDates = [],
  minDate,
  maxDate,
  showTimeSlots = false,
  timeSlots = [],
  selectedTimeSlot,
  onTimeSlotSelect,
  className = '',
  size = 'medium'
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isDateAvailable = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return availableDates.includes(dateString);
  };

  const isDateBooked = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return bookedDates.includes(dateString);
  };

  const isDateUnavailable = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return unavailableDates.includes(dateString);
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date) || isDateUnavailable(date)) return;
    onDateSelect?.(date);
  };

  const renderMonthView = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-12 md:h-16"></div>
      );
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = isDateSelected(date);
      const isAvailable = isDateAvailable(date);
      const isBooked = isDateBooked(date);
      const isUnavailable = isDateUnavailable(date);
      const isDisabled = isDateDisabled(date);

      let cellClasses = `h-12 md:h-16 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg relative font-sans text-sm md:text-base`;
      
      if (isDisabled || isUnavailable) {
        cellClasses += ' bg-gray-100 text-gray-400 cursor-not-allowed';
      } else if (isSelected) {
        cellClasses += ' bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white font-bold shadow-lg transform scale-105';
      } else if (isToday) {
        cellClasses += ' bg-blue-100 text-blue-800 font-bold border-2 border-blue-300';
      } else if (isBooked) {
        cellClasses += ' bg-red-100 text-red-800 font-semibold';
      } else if (isAvailable) {
        cellClasses += ' bg-green-100 text-green-800 hover:bg-green-200 font-semibold';
      } else {
        cellClasses += ' text-gray-700 hover:bg-gray-100';
      }

      days.push(
        <div
          key={day}
          className={cellClasses}
          onClick={() => handleDateClick(date)}
        >
          <span>{day}</span>
          {isAvailable && !isBooked && !isSelected && (
            <div className="absolute w-2 h-2 bg-green-500 rounded-full bottom-1 right-1"></div>
          )}
          {isBooked && (
            <div className="absolute w-2 h-2 bg-red-500 rounded-full bottom-1 right-1"></div>
          )}
        </div>
      );
    }

    return days;
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className={`bg-white rounded-2xl border border-gray-200 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-2 transition-colors rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="text-center">
          <h3 className={`font-bold text-gray-800 font-handwritten ${sizeClasses[size]}`}>
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
        </div>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-2 transition-colors rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="p-2 font-sans text-xs font-bold text-center text-gray-600 md:text-sm">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {renderMonthView()}
        </div>
      </div>

      {/* Time Slots */}
      {showTimeSlots && selectedDate && (
        <div className="p-4 border-t border-gray-200">
          <h4 className="mb-3 font-bold text-gray-800 font-handwritten">Available Time Slots</h4>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-4">
            {timeSlots.map((timeSlot) => (
              <button
                key={timeSlot}
                onClick={() => onTimeSlotSelect?.(timeSlot)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-sans ${
                  selectedTimeSlot === timeSlot
                    ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-green-100 border border-green-300 rounded"></div>
            <span className="font-sans text-gray-600">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-red-100 border border-red-300 rounded"></div>
            <span className="font-sans text-gray-600">Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-blue-100 border border-blue-300 rounded"></div>
            <span className="font-sans text-gray-600">Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-gray-100 border border-gray-300 rounded"></div>
            <span className="font-sans text-gray-600">Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  );
}