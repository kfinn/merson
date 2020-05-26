# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_26_045233) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "city_regions", force: :cascade do |t|
    t.bigint "city_id", null: false
    t.boolean "shield", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_city_regions_on_city_id"
  end

  create_table "edge_field_regions", force: :cascade do |t|
    t.bigint "edge_id", null: false
    t.bigint "field_region_id", null: false
    t.boolean "left_of_road"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["edge_id", "left_of_road"], name: "index_edge_field_regions_on_edge_id_and_left_of_road", unique: true
    t.index ["edge_id"], name: "index_edge_field_regions_on_edge_id"
    t.index ["field_region_id"], name: "index_edge_field_regions_on_field_region_id"
  end

  create_table "edges", force: :cascade do |t|
    t.string "type", null: false
    t.bigint "tile_id", null: false
    t.string "orientation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "city_region_id"
    t.bigint "road_segment_id"
    t.index ["city_region_id"], name: "index_edges_on_city_region_id"
    t.index ["orientation_id"], name: "index_edges_on_orientation_id"
    t.index ["road_segment_id"], name: "index_edges_on_road_segment_id"
    t.index ["tile_id", "orientation_id"], name: "index_edges_on_tile_id_and_orientation_id", unique: true
    t.index ["tile_id"], name: "index_edges_on_tile_id"
    t.index ["type"], name: "index_edges_on_type"
  end

  create_table "field_regions", force: :cascade do |t|
    t.bigint "field_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["field_id"], name: "index_field_regions_on_field_id"
  end

  create_table "fields", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "road_segments", force: :cascade do |t|
    t.bigint "road_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["road_id"], name: "index_road_segments_on_road_id"
  end

  create_table "roads", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tiles", force: :cascade do |t|
    t.string "orientation_id"
    t.string "tile_variant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["orientation_id"], name: "index_tiles_on_orientation_id"
    t.index ["tile_variant_id"], name: "index_tiles_on_tile_variant_id"
  end

  add_foreign_key "city_regions", "cities"
  add_foreign_key "edge_field_regions", "edges"
  add_foreign_key "edge_field_regions", "field_regions"
  add_foreign_key "edges", "city_regions"
  add_foreign_key "edges", "road_segments"
  add_foreign_key "edges", "tiles"
  add_foreign_key "field_regions", "fields"
  add_foreign_key "road_segments", "roads"
end
