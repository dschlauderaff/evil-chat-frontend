module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def Connection
      self.current_user = request.session.fetch("username", nil)
      reject_unauthorized_connection unless current_user
    end
  end
end
