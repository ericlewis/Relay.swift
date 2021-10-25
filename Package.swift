// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Relay.swift",
    platforms: [
        .macOS(.v11),
        .iOS(.v14),
        .tvOS(.v14),
        .watchOS(.v7),
    ],
    products: [
        .library(
            name: "Relay",
            targets: ["Relay"]),
        .library(
            name: "RelaySwiftUI",
            targets: ["RelaySwiftUI"]),
    ],
    dependencies: [
        .package(name: "SwiftSyntax", url: "https://github.com/apple/swift-syntax.git", .branch("release/5.5")),
        .package(name: "SnapshotTesting", url: "https://github.com/pointfreeco/swift-snapshot-testing.git", from: "1.8.0"),
        .package(name: "Nimble", url: "https://github.com/Quick/Nimble.git", .upToNextMajor(from: "9.0.0")),
    ],
    targets: [
        .target(
            name: "Relay",
            dependencies: [],
            exclude: ["BUILD.bazel"]),
        .testTarget(
            name: "RelayTests",
            dependencies: ["Relay", "RelayTestHelpers", "SnapshotTesting", "Nimble"],
            exclude: ["__Snapshots__"]),
        .target(
            name: "RelaySwiftUI",
            dependencies: ["Relay"],
            exclude: ["BUILD.bazel"]),
        .testTarget(
            name: "RelaySwiftUITests",
            dependencies: ["RelaySwiftUI", "RelayTestHelpers", "SnapshotTesting", "Nimble"],
            exclude: ["__Snapshots__"]),
        .target(
            name: "RelayTestHelpers",
            dependencies: ["Relay", "RelaySwiftUI", "SnapshotTesting"],
            exclude: ["StarWars/schema.graphql", "ToDo/schema.graphql"]),
        .executableTarget(
            name: "find-graphql-tags",
            dependencies: ["SwiftSyntax"]),
    ]
)
