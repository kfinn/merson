class Orientation < ActiveHash::Base
    include ActiveHash::Enum
    enum_accessor :id
    self.data = [
        {
            id: 'north',
            rotation: 0,
            dx: 0,
            dy: -1
        },
        {
            id: 'south',
            rotation: 180,
            dx: 0,
            dy: 1
        },
        {
            id: 'east',
            rotation: 90,
            dx: 1,
            dy: 0
        },
        {
            id: 'west',
            rotation: 270,
            dx: -1,
            dy: 0
        }
    ]

    def self.from_rotation(rotation)
        find_by! rotation: (rotation % 360)
    end

    def +(other)
        self.class.from_rotation(rotation + other.rotation)
    end

    def -(other)
        self.class.from_rotation(rotation + (-other.rotation))
    end

    def -@
        self.class.from_rotation(rotation + 180)
    end
end
