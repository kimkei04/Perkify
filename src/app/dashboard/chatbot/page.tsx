'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, 
  Send, 
  MessageSquare, 
  HelpCircle,
  Award,
  Store,
  Gift,
  Clock,
  CheckCircle,
  Sparkles,
  Settings,
  Mic,
  MicOff
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { useState } from 'react';

export default function ChatbotPage() {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. I can help you with questions about your rewards, store information, and more. What would you like to know?',
      timestamp: 'Just now'
    }
  ]);

  const quickActions = [
    {
      title: 'Check my rewards',
      description: 'View available rewards and progress',
      icon: <Gift className="h-4 w-4" />
    },
    {
      title: 'Find stores',
      description: 'Discover new stores to subscribe to',
      icon: <Store className="h-4 w-4" />
    },
    {
      title: 'Redeem points',
      description: 'Use your points for rewards',
      icon: <Award className="h-4 w-4" />
    },
    {
      title: 'Store hours',
      description: 'Check business hours and locations',
      icon: <Clock className="h-4 w-4" />
    }
  ];

  const faqItems = [
    {
      question: 'How do I earn points?',
      answer: 'You earn points by making purchases at subscribed stores. Each store has different point rates - typically 1 point per dollar spent.'
    },
    {
      question: 'How do I redeem rewards?',
      answer: 'Once you have enough points, you can redeem rewards directly from the store or through the app. Just show your reward code at checkout.'
    },
    {
      question: 'Do points expire?',
      answer: 'Points typically don\'t expire, but individual rewards may have expiration dates. Check your wallet for specific expiry information.'
    },
    {
      question: 'Can I use rewards at multiple stores?',
      answer: 'Rewards are store-specific. Each store has its own loyalty program, but you can subscribe to multiple stores to earn rewards everywhere.'
    },
    {
      question: 'How do I subscribe to a new store?',
      answer: 'Visit the Store Search page, find a store you like, and click "Subscribe". You\'ll start earning points immediately after your first purchase.'
    }
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Thanks for your question! I\'m here to help with your loyalty program needs. You can ask me about rewards, points, store information, or anything else related to your Perkify experience.',
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="AI Assistant"
        description="Get instant help with your rewards, stores, and loyalty program"
      />
      
      <div className="space-y-6">
        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle>Chat with AI Assistant</CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Online
              </Badge>
            </div>
            <CardDescription>
              Ask me anything about your rewards, stores, or loyalty program
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.type === 'bot' && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 p-4 border-t">
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsListening(!isListening)}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="quick-actions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quick-actions">Quick Actions</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="quick-actions" className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Common tasks you can ask me about
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 justify-start"
                      onClick={() => handleSendMessage(action.title)}
                    >
                      <div className="flex items-center gap-3">
                        {action.icon}
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Suggested Questions</CardTitle>
                <CardDescription>
                  Try asking me these common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'What rewards do I have available?',
                    'How many points do I have?',
                    'What stores am I subscribed to?',
                    'How do I redeem my rewards?',
                    'What are the store hours for The Daily Grind?',
                    'How do I earn more points?'
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => handleSendMessage(question)}
                    >
                      <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>
                  Common questions and answers about Perkify
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Chatbot Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Assistant Settings
                </CardTitle>
                <CardDescription>
                  Customize your AI assistant experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Voice Responses</h4>
                      <p className="text-sm text-muted-foreground">
                        Enable voice responses from the assistant
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Smart Suggestions</h4>
                      <p className="text-sm text-muted-foreground">
                        Get proactive suggestions based on your activity
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Store Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about store updates
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Reward Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Get notified when new rewards are available
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistant Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle>What I Can Help With</CardTitle>
                <CardDescription>
                  Here's what your AI assistant can do for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Check reward status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Track points balance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Find store information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Check store hours</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-pink-500" />
                      <span className="text-sm">Answer questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Provide suggestions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Troubleshoot issues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">General assistance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
