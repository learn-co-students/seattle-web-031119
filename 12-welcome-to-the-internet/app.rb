require "pry"

class App
  def call(environment_hash)

    # binding.pry

    request = Rack::Request.new(environment_hash)

    case request.path_info

    when "/"
      status_code = 200
      header = {}
      body = ['hello']

      return [status_code, header, body]
    when /about/
      status_code = 200
      header = {}
      body = [
        <<~HTML
        <h1>About this website</h1>
        <p>This is information</p>
        HTML
      ]

      return [status_code, header, body]
    else
      status_code = 404
      header = {}
      body = ['Page doesn\'t exist']

      return [status_code, header, body]
    end

  end
end
