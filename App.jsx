import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Switch } from './components/ui/switch';
import { 
  Phone, 
  Mail, 
  Building, 
  DollarSign, 
  Calendar, 
  User, 
  MessageSquare, 
  PhoneCall,
  Edit,
  Plus,
  Filter,
  Search,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Settings,
  BarChart3,
  FileText,
  MessageCircle,
  Smartphone,
  UserPlus,
  Zap,
  HelpCircle,
  Presentation,
  Send,
  Check,
  X,
  Home,
  Globe,
  Shield,
  Bell,
  Download,
  Upload,
  Eye,
  Star,
  Target,
  Briefcase,
  PieChart,
  Activity
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLead, setSelectedLead] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'client', message: 'Здравствуйте! Интересует квартира в ЖК Северная Звезда', time: '14:30' },
    { id: 2, sender: 'agent', message: 'Добро пожаловать! Я помогу вам с выбором квартиры. Какой бюджет вы рассматриваете?', time: '14:32' },
    { id: 3, sender: 'client', message: 'До 10 миллионов рублей', time: '14:35' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Sample data
  const leads = [
    {
      id: 'L001',
      name: 'Анна Петрова',
      phone: '+7 (999) 123-45-67',
      email: 'anna.petrova@email.com',
      property: 'ЖК Северная Звезда',
      budget: 8500000,
      status: 'new',
      received: '13.06.2025, 10:30',
      source: 'Сайт',
      notes: 'Интересуется 2-комнатной квартирой, готова к просмотру на выходных',
      rooms: '2',
      district: 'Центральный'
    },
    {
      id: 'L002',
      name: 'Михаил Сидоров',
      phone: '+7 (999) 987-65-43',
      email: 'mikhail.sidorov@email.com',
      property: 'ЖК Солнечный',
      budget: 12000000,
      status: 'contacted',
      received: '13.06.2025, 09:15',
      source: 'Реклама',
      notes: 'Первичный звонок состоялся, назначена встреча на завтра',
      rooms: '3',
      district: 'Северный'
    },
    {
      id: 'L003',
      name: 'Елена Козлова',
      phone: '+7 (999) 555-77-88',
      email: 'elena.kozlova@email.com',
      property: 'ЖК Морской Бриз',
      budget: 15000000,
      status: 'qualified',
      received: '12.06.2025, 16:45',
      source: 'Рекомендация',
      notes: 'Высокий интерес, готова к сделке в ближайшее время',
      rooms: '4',
      district: 'Приморский'
    }
  ];

  const communications = [
    {
      id: 1,
      type: 'system',
      message: 'Лид получен от Lead.Rest',
      timestamp: '13.06.2025, 10:30',
      icon: <User className="w-4 h-4" />
    },
    {
      id: 2,
      type: 'call',
      message: 'Первичный звонок - клиент заинтересован',
      timestamp: '13.06.2025, 11:15',
      icon: <PhoneCall className="w-4 h-4" />
    },
    {
      id: 3,
      type: 'note',
      message: 'Назначена встреча на просмотр квартиры',
      timestamp: '13.06.2025, 11:20',
      icon: <MessageSquare className="w-4 h-4" />
    }
  ];

  const finances = [
    {
      id: 1,
      amount: 81000,
      date: '24 Апреля 2025 г.',
      description: 'Пополнение баланса'
    },
    {
      id: 2,
      amount: 45000,
      date: '20 Апреля 2025 г.',
      description: 'Оплата за лиды'
    },
    {
      id: 3,
      amount: 120000,
      date: '15 Апреля 2025 г.',
      description: 'Пополнение баланса'
    }
  ];

  const faqData = [
    {
      question: 'Как добавить нового лида в систему?',
      answer: 'Перейдите на вкладку "Быстрая фиксация" или используйте форму приема лидов. Заполните все обязательные поля и нажмите "Сохранить".'
    },
    {
      question: 'Как изменить статус лида?',
      answer: 'Откройте карточку лида в разделе "Коммуникации" и нажмите кнопку "Изменить статус". Выберите новый статус из выпадающего списка.'
    },
    {
      question: 'Что делать с нецелевыми лидами?',
      answer: 'Нецелевые лиды можно отправить через специальную форму в разделе "Нецелевые лиды". Укажите причину и дополнительные комментарии.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-800 border-green-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'qualified': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'unqualified': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'new': return 'Новый';
      case 'contacted': return 'Связались';
      case 'qualified': return 'Целевой';
      case 'unqualified': return 'Нецелевой';
      default: return status;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        sender: 'agent',
        message: newMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Новые лиды</p>
                <p className="text-2xl font-bold text-blue-900">12</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">В работе</p>
                <p className="text-2xl font-bold text-green-900">8</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Целевые</p>
                <p className="text-2xl font-bold text-purple-900">24</p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Конверсия</p>
                <p className="text-2xl font-bold text-orange-900">68%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leads List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Входящие лиды</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Фильтр
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Поиск
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead) => (
              <Card 
                key={lead.id} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-blue-500"
                onClick={() => {
                  setSelectedLead(lead);
                  setActiveTab('communication');
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{lead.name}</h3>
                        <p className="text-sm text-gray-600">ID: {lead.id}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{lead.phone}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{lead.property}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">{formatCurrency(lead.budget)}</span>
                      </div>
                      
                      <Badge className={getStatusColor(lead.status)}>
                        {getStatusText(lead.status)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    Получен: {lead.received}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const LeadReceptionView = () => (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Прием заявок с сайта</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="client-name" className="text-sm font-medium">Имя клиента</Label>
              <Input 
                id="client-name" 
                placeholder="Введите имя клиента"
                className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-phone" className="text-sm font-medium">Номер телефона</Label>
              <Input 
                id="client-phone" 
                placeholder="+7 (999) 123-45-67"
                className="border-2 border-green-200 focus:border-green-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-email" className="text-sm font-medium">Email</Label>
              <Input 
                id="client-email" 
                type="email"
                placeholder="client@example.com"
                className="border-2 border-purple-200 focus:border-purple-500 rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium">Бюджет (руб.)</Label>
              <Input 
                id="budget" 
                placeholder="8500000"
                className="border-2 border-orange-200 focus:border-orange-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rooms" className="text-sm font-medium">Комнатность</Label>
              <Select>
                <SelectTrigger className="border-2 border-pink-200 focus:border-pink-500 rounded-lg">
                  <SelectValue placeholder="Выберите количество комнат" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 комната</SelectItem>
                  <SelectItem value="2">2 комнаты</SelectItem>
                  <SelectItem value="3">3 комнаты</SelectItem>
                  <SelectItem value="4">4+ комнат</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district" className="text-sm font-medium">Район</Label>
              <Select>
                <SelectTrigger className="border-2 border-indigo-200 focus:border-indigo-500 rounded-lg">
                  <SelectValue placeholder="Выберите район" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="center">Центральный</SelectItem>
                  <SelectItem value="north">Северный</SelectItem>
                  <SelectItem value="south">Южный</SelectItem>
                  <SelectItem value="east">Восточный</SelectItem>
                  <SelectItem value="west">Западный</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="complex" className="text-sm font-medium">Название ЖК</Label>
              <Select>
                <SelectTrigger className="border-2 border-teal-200 focus:border-teal-500 rounded-lg">
                  <SelectValue placeholder="Выберите ЖК" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north-star">ЖК Северная Звезда</SelectItem>
                  <SelectItem value="sunny">ЖК Солнечный</SelectItem>
                  <SelectItem value="sea-breeze">ЖК Морской Бриз</SelectItem>
                  <SelectItem value="green-quarter">ЖК Зеленый Квартал</SelectItem>
                  <SelectItem value="central">ЖК Центральный</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="additional-info" className="text-sm font-medium">Дополнительная информация</Label>
          <Textarea 
            id="additional-info"
            placeholder="Дополнительные пожелания клиента..."
            className="border-2 border-gray-200 focus:border-gray-500 rounded-lg min-h-[100px]"
          />
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg">
          <Plus className="w-4 h-4 mr-2" />
          Добавить лид
        </Button>
      </CardContent>
    </Card>
  );

  const CallCenterView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Исходящий звонок</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Анна Петрова</h3>
                <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <PhoneCall className="w-4 h-4 mr-2" />
                Позвонить
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Чат
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Информация о лиде:</h4>
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p><span className="font-medium">ЖК:</span> Северная Звезда</p>
              <p><span className="font-medium">Бюджет:</span> 8 500 000 ₽</p>
              <p><span className="font-medium">Комнат:</span> 2</p>
              <p><span className="font-medium">Источник:</span> Сайт</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Диалог с клиентом</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm"><span className="font-medium">Оператор:</span> Здравствуйте! Это компания Lead.Rest. Вы оставляли заявку на квартиру в ЖК Северная Звезда?</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="text-sm"><span className="font-medium">Клиент:</span> Да, здравствуйте! Интересует 2-комнатная квартира.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm"><span className="font-medium">Оператор:</span> Отлично! У нас есть несколько вариантов в вашем бюджете. Когда вам удобно посмотреть квартиры?</p>
            </div>
            
            <div className="flex space-x-2">
              <Input placeholder="Введите сообщение..." className="flex-1" />
              <Button>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const UnqualifiedLeadForm = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Отправка нецелевого лида</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">Телефон</Label>
          <Input 
            id="phone" 
            placeholder="+7 (999) 123-45-67"
            className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="reason-text" className="text-sm font-medium">Причина нецелевого</Label>
          <Textarea 
            id="reason-text"
            placeholder="Опишите причину..."
            className="border-2 border-blue-200 focus:border-blue-500 rounded-lg min-h-[100px]"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="reason-select" className="text-sm font-medium">Причина</Label>
          <Select>
            <SelectTrigger className="border-2 border-orange-200 focus:border-orange-500 rounded-lg">
              <SelectValue placeholder="Выберите причину" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">Не подходит бюджет</SelectItem>
              <SelectItem value="location">Не подходит локация</SelectItem>
              <SelectItem value="timing">Не подходящее время</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg">
          Отправить
        </Button>
      </CardContent>
    </Card>
  );

  const CommunicationView = () => {
    if (!selectedLead) {
      return (
        <Card className="text-center py-12">
          <CardContent>
            <User className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Выберите лид</h3>
            <p className="text-gray-500">Перейдите на вкладку "Личный кабинет" и выберите лид для просмотра коммуникаций</p>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lead Details */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl">{selectedLead.name}</CardTitle>
                <p className="text-sm text-gray-600">ID: {selectedLead.id}</p>
              </div>
            </div>
            <Badge className={`w-fit ${getStatusColor(selectedLead.status)}`}>
              {getStatusText(selectedLead.status)}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>{selectedLead.phone}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>{selectedLead.email}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Building className="w-5 h-5 text-gray-500" />
              <span>{selectedLead.property}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <span className="font-medium">{formatCurrency(selectedLead.budget)}</span>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3">Действия</h4>
              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Сообщение
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Изменить статус
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Communication History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">История коммуникаций</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {communications.map((comm) => (
                <div key={comm.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {comm.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{comm.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{comm.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedLead.notes && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Заметки</h4>
                <p className="text-sm text-yellow-700">{selectedLead.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const WhatsAppNotificationView = () => (
    <div className="max-w-md mx-auto">
      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center flex items-center justify-center">
            <Smartphone className="w-6 h-6 mr-2 text-green-600" />
            WhatsApp Уведомления
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Lead.Rest</h3>
                <p className="text-xs text-gray-500">сейчас</p>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-sm font-medium">🏠 Новый лид!</p>
              <p className="text-sm mt-1">
                <strong>Анна Петрова</strong><br/>
                📞 +7 (999) 123-45-67<br/>
                🏢 ЖК Северная Звезда<br/>
                💰 8 500 000 ₽
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Lead.Rest</h3>
                <p className="text-xs text-gray-500">5 мин назад</p>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-sm font-medium">📋 Статус обновлен</p>
              <p className="text-sm mt-1">
                Лид <strong>Михаил Сидоров</strong> переведен в статус "Связались"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ClientFixationView = () => (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">Фиксация клиента</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fix-name" className="text-sm font-medium">ФИО клиента</Label>
              <Input 
                id="fix-name" 
                placeholder="Иванов Иван Иванович"
                className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fix-phone" className="text-sm font-medium">Телефон</Label>
              <Input 
                id="fix-phone" 
                placeholder="+7 (999) 123-45-67"
                className="border-2 border-green-200 focus:border-green-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fix-email" className="text-sm font-medium">Email</Label>
              <Input 
                id="fix-email" 
                type="email"
                placeholder="client@example.com"
                className="border-2 border-purple-200 focus:border-purple-500 rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fix-property" className="text-sm font-medium">Объект недвижимости</Label>
              <Input 
                id="fix-property" 
                placeholder="ЖК Северная Звезда, кв. 45"
                className="border-2 border-orange-200 focus:border-orange-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fix-price" className="text-sm font-medium">Цена сделки</Label>
              <Input 
                id="fix-price" 
                placeholder="8500000"
                className="border-2 border-pink-200 focus:border-pink-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fix-date" className="text-sm font-medium">Дата сделки</Label>
              <Input 
                id="fix-date" 
                type="date"
                className="border-2 border-indigo-200 focus:border-indigo-500 rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fix-comment" className="text-sm font-medium">Комментарий</Label>
          <Textarea 
            id="fix-comment"
            placeholder="Дополнительная информация о сделке..."
            className="border-2 border-gray-200 focus:border-gray-500 rounded-lg min-h-[100px]"
          />
        </div>
        
        <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg">
          <Target className="w-4 h-4 mr-2" />
          Зафиксировать клиента
        </Button>
      </CardContent>
    </Card>
  );

  const UnqualifiedApprovalView = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Проверка нецелевых лидов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { id: 1, phone: '+7 (999) 111-22-33', reason: 'Не подходит бюджет', comment: 'Клиент ищет квартиру до 5 млн', status: 'pending' },
            { id: 2, phone: '+7 (999) 444-55-66', reason: 'Не подходит локация', comment: 'Интересует только центр города', status: 'approved' },
            { id: 3, phone: '+7 (999) 777-88-99', reason: 'Другое', comment: 'Уже купил квартиру', status: 'rejected' }
          ].map((item) => (
            <Card key={item.id} className="border-l-4 border-l-orange-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{item.phone}</span>
                      <Badge className={
                        item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'approved' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {item.status === 'pending' ? 'На проверке' :
                         item.status === 'approved' ? 'Одобрено' : 'Отклонено'}
                      </Badge>
                    </div>
                    <p className="text-sm"><strong>Причина:</strong> {item.reason}</p>
                    <p className="text-sm text-gray-600">{item.comment}</p>
                  </div>
                  
                  {item.status === 'pending' && (
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const FinanceView = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Учет финансов и пополнений</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Сумма пополнения</th>
                <th className="text-left py-3 px-4 font-semibold">Дата</th>
                <th className="text-left py-3 px-4 font-semibold">Описание</th>
              </tr>
            </thead>
            <tbody>
              {finances.map((finance) => (
                <tr key={finance.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{formatCurrency(finance.amount)}</td>
                  <td className="py-3 px-4">{finance.date}</td>
                  <td className="py-3 px-4">{finance.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const FAQView = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <HelpCircle className="w-6 h-6 mr-2" />
          Часто задаваемые вопросы
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const QuickEntryView = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center flex items-center justify-center">
          <Zap className="w-6 h-6 mr-2" />
          Быстрая фиксация лида
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quick-name" className="text-sm font-medium">Имя</Label>
            <Input 
              id="quick-name" 
              placeholder="Имя клиента"
              className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quick-phone" className="text-sm font-medium">Телефон</Label>
            <Input 
              id="quick-phone" 
              placeholder="+7 (999) 123-45-67"
              className="border-2 border-green-200 focus:border-green-500 rounded-lg"
            />
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium py-3 rounded-lg">
          <Zap className="w-4 h-4 mr-2" />
          Быстро добавить
        </Button>
      </CardContent>
    </Card>
  );

  const PresentationView = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Presentation className="w-6 h-6 mr-2" />
          Создание презентации
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pres-title" className="text-sm font-medium">Название презентации</Label>
              <Input 
                id="pres-title" 
                placeholder="Презентация для клиента"
                className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pres-client" className="text-sm font-medium">Клиент</Label>
              <Select>
                <SelectTrigger className="border-2 border-green-200 focus:border-green-500 rounded-lg">
                  <SelectValue placeholder="Выберите клиента" />
                </SelectTrigger>
                <SelectContent>
                  {leads.map((lead) => (
                    <SelectItem key={lead.id} value={lead.id}>{lead.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pres-template" className="text-sm font-medium">Шаблон</Label>
              <Select>
                <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500 rounded-lg">
                  <SelectValue placeholder="Выберите шаблон" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Стандартный</SelectItem>
                  <SelectItem value="premium">Премиум</SelectItem>
                  <SelectItem value="minimal">Минималистичный</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pres-slides" className="text-sm font-medium">Количество слайдов</Label>
              <Input 
                id="pres-slides" 
                type="number"
                placeholder="10"
                className="border-2 border-orange-200 focus:border-orange-500 rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg">
          <Presentation className="w-4 h-4 mr-2" />
          Создать презентацию
        </Button>
      </CardContent>
    </Card>
  );

  const WhatsAppChatView = () => (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <MessageCircle className="w-6 h-6 mr-2 text-green-600" />
          WhatsApp чат с клиентом
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3">Контакты</h3>
            <div className="space-y-2">
              {leads.map((lead) => (
                <Card key={lead.id} className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{lead.name}</p>
                        <p className="text-xs text-gray-500">{lead.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 h-96 overflow-y-auto mb-4">
              <div className="space-y-3">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.sender === 'agent' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white border border-gray-200'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'agent' ? 'text-green-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Input 
                placeholder="Введите сообщение..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button onClick={sendMessage} className="bg-green-600 hover:bg-green-700 text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ProfileSettingsView = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          Настройки профиля
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="profile-name" className="text-sm font-medium">Имя пользователя</Label>
            <Input 
              id="profile-name" 
              placeholder="Ваше имя"
              className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profile-email" className="text-sm font-medium">Email</Label>
            <Input 
              id="profile-email" 
              type="email"
              placeholder="your@email.com"
              className="border-2 border-green-200 focus:border-green-500 rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profile-company" className="text-sm font-medium">Компания</Label>
            <Input 
              id="profile-company" 
              placeholder="Название компании"
              className="border-2 border-purple-200 focus:border-purple-500 rounded-lg"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Уведомления</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="notif-email" className="text-sm font-medium">Email уведомления</Label>
              <Switch id="notif-email" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notif-whatsapp" className="text-sm font-medium">WhatsApp уведомления</Label>
              <Switch id="notif-whatsapp" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notif-sms" className="text-sm font-medium">SMS уведомления</Label>
              <Switch id="notif-sms" />
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg">
          <Settings className="w-4 h-4 mr-2" />
          Сохранить настройки
        </Button>
      </CardContent>
    </Card>
  );

  const ReportsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Общий доход</p>
                <p className="text-2xl font-bold text-blue-900">2 450 000 ₽</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Закрытые сделки</p>
                <p className="text-2xl font-bold text-green-900">18</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Средний чек</p>
                <p className="text-2xl font-bold text-purple-900">136 111 ₽</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Activity className="w-6 h-6 mr-2" />
            Детальная аналитика
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Источники лидов</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Сайт</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Реклама</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рекомендации</span>
                    <span className="font-medium">25%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Конверсия по месяцам</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Май 2025</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Апрель 2025</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Март 2025</span>
                    <span className="font-medium">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const UserManagementView = () => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center">
            <UserPlus className="w-6 h-6 mr-2" />
            Управление пользователями
          </CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Добавить пользователя
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Имя</th>
                <th className="text-left py-3 px-4 font-semibold">Email</th>
                <th className="text-left py-3 px-4 font-semibold">Роль</th>
                <th className="text-left py-3 px-4 font-semibold">Статус</th>
                <th className="text-left py-3 px-4 font-semibold">Действия</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Анна Иванова', email: 'anna@company.com', role: 'Администратор', status: 'Активен' },
                { name: 'Петр Петров', email: 'petr@company.com', role: 'Менеджер', status: 'Активен' },
                { name: 'Мария Сидорова', email: 'maria@company.com', role: 'Оператор', status: 'Неактивен' }
              ].map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <Badge className={user.status === 'Активен' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const IntegrationsView = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Интеграции
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'WhatsApp Business', description: 'Интеграция с WhatsApp для уведомлений', connected: true, icon: <MessageCircle className="w-6 h-6" /> },
            { name: 'Airtable', description: 'Синхронизация данных с Airtable', connected: true, icon: <FileText className="w-6 h-6" /> },
            { name: 'Telegram Bot', description: 'Уведомления через Telegram', connected: false, icon: <Send className="w-6 h-6" /> },
            { name: 'Email Marketing', description: 'Интеграция с почтовыми сервисами', connected: false, icon: <Mail className="w-6 h-6" /> }
          ].map((integration, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      {integration.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{integration.name}</h3>
                      <p className="text-sm text-gray-600">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={integration.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {integration.connected ? 'Подключено' : 'Не подключено'}
                    </Badge>
                    <Button size="sm" variant="outline">
                      {integration.connected ? 'Настроить' : 'Подключить'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lead.Rest
              </h1>
              <span className="text-sm text-gray-500">Система управления лидами по недвижимости</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-7 lg:grid-cols-14 mb-8 bg-white shadow-sm">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Home className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Личный кабинет</span>
            </TabsTrigger>
            <TabsTrigger 
              value="lead-reception"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <UserPlus className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Прием лидов</span>
            </TabsTrigger>
            <TabsTrigger 
              value="call-center"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <PhoneCall className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Колл-центр</span>
            </TabsTrigger>
            <TabsTrigger 
              value="unqualified"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <X className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Нецелевые</span>
            </TabsTrigger>
            <TabsTrigger 
              value="communication"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <MessageSquare className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Коммуникации</span>
            </TabsTrigger>
            <TabsTrigger 
              value="whatsapp-notifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Smartphone className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">WhatsApp</span>
            </TabsTrigger>
            <TabsTrigger 
              value="client-fixation"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Target className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Фиксация</span>
            </TabsTrigger>
            <TabsTrigger 
              value="unqualified-approval"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Check className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Проверка</span>
            </TabsTrigger>
            <TabsTrigger 
              value="finance"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <DollarSign className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Финансы</span>
            </TabsTrigger>
            <TabsTrigger 
              value="faq"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <HelpCircle className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">FAQ</span>
            </TabsTrigger>
            <TabsTrigger 
              value="quick-entry"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Zap className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Быстро</span>
            </TabsTrigger>
            <TabsTrigger 
              value="presentation"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Presentation className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Презентации</span>
            </TabsTrigger>
            <TabsTrigger 
              value="whatsapp-chat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <MessageCircle className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Чат</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs lg:text-sm"
            >
              <Settings className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">Настройки</span>
            </TabsTrigger>
          </TabsList>

          {/* Secondary Navigation for Additional Features */}
          <div className="mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
                <TabsTrigger 
                  value="reports"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Отчеты
                </TabsTrigger>
                <TabsTrigger 
                  value="user-management"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Пользователи
                </TabsTrigger>
                <TabsTrigger 
                  value="integrations"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Интеграции
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <TabsContent value="dashboard">
            <DashboardView />
          </TabsContent>

          <TabsContent value="lead-reception">
            <LeadReceptionView />
          </TabsContent>

          <TabsContent value="call-center">
            <CallCenterView />
          </TabsContent>

          <TabsContent value="unqualified">
            <UnqualifiedLeadForm />
          </TabsContent>

          <TabsContent value="communication">
            <CommunicationView />
          </TabsContent>

          <TabsContent value="whatsapp-notifications">
            <WhatsAppNotificationView />
          </TabsContent>

          <TabsContent value="client-fixation">
            <ClientFixationView />
          </TabsContent>

          <TabsContent value="unqualified-approval">
            <UnqualifiedApprovalView />
          </TabsContent>

          <TabsContent value="finance">
            <FinanceView />
          </TabsContent>

          <TabsContent value="faq">
            <FAQView />
          </TabsContent>

          <TabsContent value="quick-entry">
            <QuickEntryView />
          </TabsContent>

          <TabsContent value="presentation">
            <PresentationView />
          </TabsContent>

          <TabsContent value="whatsapp-chat">
            <WhatsAppChatView />
          </TabsContent>

          <TabsContent value="settings">
            <ProfileSettingsView />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsView />
          </TabsContent>

          <TabsContent value="user-management">
            <UserManagementView />
          </TabsContent>

          <TabsContent value="integrations">
            <IntegrationsView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default App;

