class Orientation < ActiveHash::Base
    include ActiveHash::Enum
    enum_accessor :id
    self.data = [
        {
            id: 'north'
        },
        {
            id: 'south'
        },
        {
            id: 'east'
        },
        {
            id: 'west'
        }
    ]
end
