class Node
  def initialize (value, parent, left_child, right_child)
    @value = value
    @parent = parent
    @left = left_child
    @right = right_child
  end

  def in_order_traverse
    if @value != nil
      @parent.in_order_traverse

    end
  end
end
