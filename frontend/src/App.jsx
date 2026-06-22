import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventSearch from "./pages/EventSearch";
import ManageEvents from "./pages/ManageEvents";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import EventDiscovery from "./pages/EventDiscovery";
import EventList from "./pages/EventList";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";

import Attendees from "./pages/Attendees";
import Analytics from "./pages/Analytics";
import Organizers from "./pages/Organizers";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";

import Wishlist from "./pages/Wishlist";

import TicketSuccess from "./pages/TicketSuccess";
import CreateEvent from "./pages/CreateEvent";
import EventMedia from "./pages/EventMedia";
import EventDetails from "./pages/EventDetails";
import TicketBooking from "./pages/TicketBooking";
import AdminDashboard from "./pages/AdminDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import AttendeeDashboard from "./pages/AttendeeDashboard";
import EditEvent from "./pages/EditEvent";
import ManageCategories from "./pages/ManageCategories";
import MyBookings from "./pages/MyBookings";
import CheckIn from "./pages/CheckIn";

import SeatManagement from "./pages/SeatManagement";

import TicketManagement from "./pages/TicketManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
  path="/event/:id"
  element={<EventDetails />}
/>

<Route
  path="/ticket-management"
  element={<TicketManagement />}
/>

<Route
  path="/seat-management"
  element={<SeatManagement />}
/>

<Route
  path="/check-in"
  element={<CheckIn />}
/>


<Route
  path="/my-bookings"
  element={<MyBookings />}
/>

<Route
  path="/wishlist"
  element={<Wishlist />}
/>

<Route
  path="/edit-event/:id"
  element={<EditEvent />}
/>


        <Route
  path="/create-event"
  element={
    <ProtectedRoute>
      <CreateEvent />
    </ProtectedRoute>
  }
/>
<Route
  path="/manage-categories"
  element={<ManageCategories />}
/>

<Route
  path="/attendees"
  element={<Attendees />}
/>

<Route
  path="/analytics"
  element={<Analytics />}
/>

<Route
  path="/organizers"
  element={<Organizers />}
/>

<Route
  path="/payments"
  element={<Payments />}
/>

<Route
  path="/settings"
  element={<Settings />}
/>


<Route
  path="/manage-events"
  element={<ManageEvents />}
/>

<Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/ticket-success"
  element={<TicketSuccess />}
/>

<Route
  path="/organizer"
  element={<OrganizerDashboard />}
/>

<Route
  path="/attendee"
  element={<AttendeeDashboard />}
/>



<Route
  path="/book-ticket/:id"
  element={<TicketBooking />}
/>



<Route
  path="/event-search"
  element={<EventSearch />}
/>

<Route
  path="/create-event"
  element={<CreateEvent />}
/>

<Route
  path="/event-discovery"
  element={<EventDiscovery />}
/>

<Route
  path="/event-details"
  element={<EventDetails />}
/>

<Route
  path="/events"
  element={
    <ProtectedRoute>
      <EventList />
    </ProtectedRoute>
  }
/>


<Route
  path="/event-media"
  element={<EventMedia />}
/>

<Route
  path="/categories"
  element={<Categories />}
/>

         <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;