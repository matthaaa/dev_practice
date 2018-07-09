class Node
  def initialize (
    value,
    parent,
    left_child,
    right_child
  )
    @value = value
    @parent = parent
    @left = left_child
    @right = right_child
  end

  def in_order_traverse
    if @value != nil
      @left.in_order_traverse
      puts @value
      @right.in_order_traverse
    end
  end
end

class Root < Node
  def initialize (
    parent = nil,
  )

  @value = value
  @parent = parent
  @left = left_child
  @right = right_child
end

class Leaf < Node
  def initialize (
    left_child = nil,
    right_child = nil
  )

end
