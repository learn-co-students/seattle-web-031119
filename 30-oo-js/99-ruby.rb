class Bar
  attr_accessor :y
  @@x = 99

  def initialize
    @y = 40
  end

  def set_x(value)
    @@x = value
  end

  def get_x
    @@x
  end
end

b1 = Bar.new
b2 = Bar.new

puts b1.get_x
puts b2.get_x

b1.set_x(645)

puts b1.get_x
puts b2.get_x
