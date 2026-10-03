import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Bell, BookCheck, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const iconMap = {
  BookCheck: BookCheck,
  Calendar: Calendar,
  Sparkles: Sparkles,
};

// Mock data for notifications
const allNotifications = [
  {
    id: 'notif-1',
    icon: 'BookCheck',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    title: 'Срок сдачи книги "Война и мир" истекает завтра',
    description: 'Не забудьте вернуть книгу или продлить срок аренды в личном кабинете.',
    time: '2 часа назад',
    link: '/profile',
    read: false,
  },
  {
    id: 'notif-2',
    icon: 'Calendar',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    title: 'Вы записаны на "Встреча с автором"',
    description: 'Мероприятие состоится сегодня в 18:00 в Конференц-зале. Ждем вас!',
    time: '8 часов назад',
    link: '/profile',
    read: false,
  },
  {
    id: 'notif-3',
    icon: 'Sparkles',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    title: 'Новая услуга: Коворкинг',
    description: 'В нашей библиотеке открылась новая зона для совместной работы. Узнайте больше!',
    time: '1 день назад',
    link: '/services/coworking',
    read: true,
  },
   {
    id: 'notif-4',
    icon: 'BookCheck',
    color: 'text-gray-400',
    bgColor: 'bg-gray-50',
    title: 'Книга "Преступление и наказание" сдана',
    description: 'Спасибо, что вернули книгу вовремя. Надеемся, она вам понравилась.',
    time: '3 дня назад',
    link: '/profile',
    read: true,
  },
];


export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<any[]>([]);

    useEffect(() => {
        const storedNotifications = localStorage.getItem('notifications');
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        } else {
            setNotifications(allNotifications);
            localStorage.setItem('notifications', JSON.stringify(allNotifications));
        }

        const timer = setTimeout(() => {
            const currentNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
            const updatedNotifications = currentNotifications.map((n: any) => ({ ...n, read: true }));
            setNotifications(updatedNotifications);
            localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Уведомления</h1>
            </div>

            <div className="space-y-6">
                {notifications.map(notif => {
                    const IconComponent = iconMap[notif.icon as keyof typeof iconMap];
                    return (
                        <Link to={notif.link} key={notif.id} className={`block p-5 rounded-xl transition-all ${notif.read ? 'bg-white hover:bg-gray-50' : 'bg-blue-50 hover:bg-blue-100'}`}>
                            <div className="flex items-start gap-4">
                                <div className={`flex-shrink-0 w-10 h-10 ${notif.bgColor} rounded-lg flex items-center justify-center`}>
                                    {IconComponent && <IconComponent className={`w-5 h-5 ${notif.color}`} />}
                                </div>
                                <div className="flex-grow">
                                    <h3 className={`font-semibold ${notif.read ? 'text-gray-700' : 'text-gray-900'}`}>{notif.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{notif.description}</p>
                                    <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                                </div>
                                {!notif.read && (
                                    <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                )}
                            </div>
                        </Link>
                    )
                })}
                 {notifications.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <Bell className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Нет новых уведомлений</h3>
                        <p>Все важные события будут отображаться здесь.</p>
                    </div>
                )}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
