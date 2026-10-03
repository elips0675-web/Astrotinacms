import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  category: string;
  color: string;
}

export function SignedUpEvents() {
  const [signedUpEvents, setSignedUpEvents] = useState<Event[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('signedUpEvents');
    if (storedEvents) {
      setSignedUpEvents(JSON.parse(storedEvents));
    }
  }, []);

  if (signedUpEvents.length === 0) {
    return (
        <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Вы еще не записались ни на одно мероприятие</h3>
            <p className="text-gray-600">Посмотрите, что мы для вас приготовили</p>
        </div>
    )
  }

  return (
    <div className="space-y-6">
      {signedUpEvents.map(event => (
        <div key={event.id} className="bg-white rounded-2xl p-4 shadow-lg flex items-start gap-4">
            <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${event.color} rounded-xl flex flex-col items-center justify-center text-white`}>
                <div className="text-3xl font-bold">{event.date.split(' ')[0]}</div>
                <div className="text-sm uppercase">{event.date.split(' ')[1]}</div>
            </div>
            <div className="flex-grow">
                <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${event.color}`}>{event.category}</p>
                <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
