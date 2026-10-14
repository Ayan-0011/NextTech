import {
  AppWindow, BarChart3, Bell, Bot, Boxes, Building2, CalendarCheck, ClipboardList,
  Code2, Cpu, Database, FileText, Globe, LayoutDashboard, LayoutTemplate, Layers,
  MessageSquare, Monitor, Package, PenTool, Plug, Search, Server, ShieldCheck,
  ShoppingCart, Smartphone, Sparkles, Tablet, Truck, Users, Workflow,
} from 'lucide-react'

const icons = {
  AppWindow, BarChart3, Bell, Bot, Boxes, Building2, CalendarCheck, ClipboardList,
  Code2, Cpu, Database, FileText, Globe, LayoutDashboard, LayoutTemplate, Layers,
  MessageSquare, Monitor, Package, PenTool, Plug, Search, Server, ShieldCheck,
  ShoppingCart, Smartphone, Sparkles, Tablet, Truck, Users, Workflow,
}

export const getIcon = (name) => icons[name] ?? Code2